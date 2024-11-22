import { useEffect, useState } from "react";
import { Game, TimeControl } from "@/models/db/GameModels";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import StyledButton from "@/components/styled/StyledButtonComponent";
import { Manager, Socket } from "socket.io-client";
import GameListItemComponent from "./items/GameListItemComponent";
import GameJoinDialog from "./dialogs/GameJoinDialog";
import CreateGameDialog from "./dialogs/CreateGameDialog";
import StyledText from "../styled/StyledTextComponent";

export default function GamesComponent() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [createDialogVisible, setCreateDialogVisible] = useState(false);
  const [gamesSocket, setGamesSocket] = useState<Socket | null>(null);

  const setUpSockets = () => {
    const socketManager = new Manager("http://localhost:3000");

    const gamesSocket = socketManager.socket("/games");

    setGamesSocket(gamesSocket);

    gamesSocket.on("waiting-games", (games) => {
      setGames(games);
    });
  };

  useEffect(() => {
    setUpSockets();
  }, []);

  const handleGamePress = (game: Game) => {
    setSelectedGame(game);
    setDialogVisible(true);
  };

  const handleJoinGame = (gameId: string) => {
    // TODO: Implement game joining logic
    console.log("Joining game:", gameId);
    setDialogVisible(false);
  };

  const handleCreateGame = (
    gameName: string,
    selectedColor: string,
    timeControl: TimeControl
  ) => {
    // TODO: Implement game creation logic
    console.log("Creating game:", { gameName, selectedColor, timeControl });
    setCreateDialogVisible(false);

    // gamesSocket?.emit("create", { gameName, selectedColor, timeControl });
  };

  return (
    <View style={styles.wrapper}>
      <View >
        <StyledText style={styles.title}>Online games</StyledText>
        <View style={styles.container}>
          <ScrollView>
            {games.map((game) => (
              <Pressable key={game._id} onPress={() => handleGamePress(game)}>
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

        <CreateGameDialog
          visible={createDialogVisible}
          onClose={() => setCreateDialogVisible(false)}
          onCreate={handleCreateGame}
        />

        <View
          style={{
            // flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            gap: 16,
            marginTop: 16,
            marginBottom: 64,
          }}
        >
          <StyledButton
            style={styles.button}
            size="lg"
            text="New online game"
            onPress={() => setCreateDialogVisible(true)}
          />
          <Link href="/game/1" asChild>
            <StyledButton style={styles.button} size="lg" text="New offline game" />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    maxHeight: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 64,
    marginBottom: 16,
  },
  wrapper: {
    flex: 1,
    width: "90%",
    maxWidth: 500,
  },
  button: {
    flex: 1,
  },
});
