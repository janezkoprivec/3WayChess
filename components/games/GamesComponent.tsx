import { useEffect, useState } from "react";
import { Game } from "@/models/db/GameModels";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import StyledButton from "@/components/styled/StyledButtonComponent";
import { Manager } from "socket.io-client";
import GameListItemComponent from "./items/GameListItemComponent";
import GameJoinDialog from "./dialogs/GameJoinDialog";

export default function GamesComponent() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const setUpSockets = () => {
    const socketManager = new Manager("http://localhost:3000");
    
    const gamesSocket = socketManager.socket("/games");

    gamesSocket.on("waiting-games", (games) => {
      setGames(games);
    });
  }
  

  useEffect(() => {
    setUpSockets();
  }, [])

  const handleGamePress = (game: Game) => {
    setSelectedGame(game);
    setDialogVisible(true);
  };

  const handleJoinGame = (gameId: string) => {
    // TODO: Implement game joining logic
    console.log('Joining game:', gameId);
    setDialogVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors["dark"].background,
        height: "100%",
        alignSelf: "center",  
      }}
    >
      <View style={styles.container}>
        <ScrollView>
          {games.map((game) => (
            <Pressable 
              key={game._id} 
              onPress={() => handleGamePress(game)}
            >
              <GameListItemComponent game={game} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
      
      <GameJoinDialog
        game={selectedGame}
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}
        onJoin={handleJoinGame}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 16,
          marginTop: 16,
        }}
      >
        <StyledButton size="lg" text="New online game" onPress={() => {}} />
        <Link href="/game/1" asChild>
          <StyledButton size="lg" text="New offline game" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
