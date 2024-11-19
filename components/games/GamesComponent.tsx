import { useEffect, useState } from "react";
import { Game } from "@/models/db/GameModels";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import StyledButton from "@/components/styled/StyledButtonComponent";
import { Manager } from "socket.io-client";
import GameListItemComponent from "./items/GameListItemComponent";

export default function GamesComponent() {
  const [games, setGames] = useState<Game[]>([]);

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
            <GameListItemComponent key={game._id} game={game} />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 16,
        }}
      >
        <StyledButton size="md" text="New online game" onPress={() => {}} />
        <Link href="/game/1" asChild>
          <StyledButton size="md" text="New offline game" />
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
