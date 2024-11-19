import { useState } from "react";
import { Game } from "@/services/GamesService";
import GamesService from "@/services/GamesService";
import { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function GameRoomsComponent() {
  const [games, setGames] = useState<Game[]>([]);

  let gamesService = undefined;

  useEffect(() => {
    gamesService = new GamesService(setGames);
  }, []);

  useEffect(() => {
    console.log("Games:", games);
  }, [games]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {games.map((game) => (
          <Text key={game.id}>{game.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
