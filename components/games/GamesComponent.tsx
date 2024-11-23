import { useEffect, useState } from "react";
import { Game, TimeControl } from "@/models/db/GameModels";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import StyledButton from "@/components/styled/StyledButtonComponent";
import { Manager, Socket } from "socket.io-client";
import GameListItemComponent from "./items/GameListItemComponent";
import GameJoinDialog from "./dialogs/GameJoinDialog";
import CreateGameDialog from "./dialogs/CreateGameDialog";
import StyledText from "../styled/StyledTextComponent";
import useAuth from "@/contexts/AuthContext";
import GameWaitingDialog from "./dialogs/GameWaitingDialog";

export default function GamesComponent() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [createDialogVisible, setCreateDialogVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("random");
  const [gamesSocket, setGamesSocket] = useState<Socket | null>(null);
  const auth = useAuth(); 

  const setUpSockets = () => {
    const socketManager = new Manager("http://localhost:3000");

    const gamesSocket = socketManager.socket("/games");

    setGamesSocket(gamesSocket);

    gamesSocket.on("waiting-games", (games) => {
      setGames(games);
    });

    gamesSocket.on("game-created", (game) => {
      router.push({
        pathname: "/game/[id]",
        params: { id: game._id, selectedColor }
      });
    });

    gamesSocket.on("error", (error) => {
      console.log("Server error:", error);
    });
  };

  useEffect(() => {
    setUpSockets();
  }, []);

  const handleGamePress = (game: Game) => {
    setSelectedGame(game);
    setDialogVisible(true);
  };

  const handleJoinGame = (game: Game, selectedColor: string) => {
    setDialogVisible(false);
    setSelectedGame(null);

    router.push({
      pathname: "/game/[id]",
      params: { id: game.id, selectedColor }
    });
  
  };

  const handleCreateGame = (
    gameName: string,
    selectedColor: string,
    timeControl: TimeControl
  ) => {
    setCreateDialogVisible(false);
    if (auth.authState?.user) {
      gamesSocket?.emit("create", { gameName, selectedColor, timeControl, user: auth.authState.user });
    } else {
      console.log("User not found");
    }
  };

  return (
    <View style={styles.wrapper}>
      <View >
        <StyledText style={styles.title}>Online games</StyledText>
        <View style={styles.container}>
          <ScrollView>
            {games.map((game) => (
              <Pressable key={game.id} onPress={() => handleGamePress(game)}>
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
          <Link href="/offline" asChild>
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
