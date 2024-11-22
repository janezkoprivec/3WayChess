import { View, StyleSheet } from "react-native";
import StyledDialog from "@/components/styled/StyledDialogComponent";
import StyledText from "@/components/styled/StyledTextComponent";
import { Game } from "@/models/db/GameModels";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { Manager, Socket } from "socket.io-client";
import useAuth from "@/contexts/AuthContext";

interface GameWaitingDialogProps {
  visible: boolean;
  game: Game;
  selectedColor: string;
  onClose: () => void;
}

export default function GameWaitingDialog({ visible, game, selectedColor }: GameWaitingDialogProps) {
  const auth = useAuth();
  const [gameSocket, setGameSocket] = useState<Socket | null>(null);  

  useEffect(() => {
    const socketManager = new Manager("http://localhost:3000");
    const gameSocket = socketManager.socket(`/games/${game._id}`);
    
    gameSocket.emit("join", { player: { user: auth.authState?.user, color: selectedColor } });

    gameSocket.on("game-updated", (game) => {
      console.log("Game updated:", game);
    });

    setGameSocket(gameSocket);
  }, [game]);

  return (
    <StyledDialog
      visible={visible}
      title="Waiting for Opponent"
      uncloseable={true}
    >
      <View style={styles.container}>
        <StyledText style={styles.text}>
          Game ID: {game.name || game._id}
        </StyledText>
        <StyledText style={styles.text}>
          Time Control: {game.timeControl.time}+{game.timeControl.increment}
        </StyledText>
        <StyledText style={styles.waitingText}>
          Waiting for an opponent to join...
        </StyledText>
      </View>
    </StyledDialog>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  waitingText: {
    fontSize: 18,
    color: Colors.dark.primary,
    marginTop: 8,
  },
});
