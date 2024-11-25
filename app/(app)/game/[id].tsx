import * as React from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardComponent from '@/components/board/BoardComponent';
import { useEffect, useState } from 'react';
import StyledLoadingOverlay from '@/components/styled/StyledLoadingOverlay';
import { Manager } from 'socket.io-client';
import useAuth from '@/contexts/AuthContext';
import { Socket } from 'socket.io-client';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Game } from '@/models/db/GameModels';
import GameWaitingDialog from '@/components/games/dialogs/GameWaitingDialog';
import OnlineGameComponent from '@/components/onlineGame/OnlineGameComponent';

function GameScreen() {
  const { id, selectedColor } = useLocalSearchParams<{ id: string, selectedColor: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [waitingDialogVisible, setWaitingDialogVisible] = useState(true);
  const [game, setGame] = useState<Game | null>(null);
  const auth = useAuth();
  const [gameSocket, setGameSocket] = useState<Socket | null>(null);


  useEffect(() => {
    const socketManager = new Manager(process.env.EXPO_PUBLIC_API_URL);
    const gameSocket = socketManager.socket(`/games/${id}`);
    
    gameSocket.emit("join", { player: { user: auth.authState?.user, color: selectedColor } });

    gameSocket.on('game-updated', (game: Game) => {
      setGame(game);
      setLoading(false);

      if (game.status === "active") {
        // router.push({
        //   pathname: "/game/[id]",
        //   params: { id: game.id }
        // });
        setWaitingDialogVisible(false);
      }
    });

    setGameSocket(gameSocket);
  }, []);
  
  const handleWaitingDialogClose = () => {
    setWaitingDialogVisible(false);
    gameSocket?.emit("leave", { player: { user: auth.authState?.user, color: selectedColor } });
    gameSocket?.disconnect();
    router.back();
  };

  return (
    <View style={{ flex: 1 }}>
      {game && <OnlineGameComponent game={game} gameSocket={gameSocket} />}

      <StyledLoadingOverlay visible={loading} /> 
      {game && <GameWaitingDialog visible={waitingDialogVisible} game={game} onClose={handleWaitingDialogClose} />}
    </View>
  );
}

export default GameScreen;