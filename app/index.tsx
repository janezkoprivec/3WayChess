import { Link, useNavigation } from "expo-router";
import { Button, Platform, View, Text } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

import { Manager } from "socket.io-client";
import GameRoomsComponent from "@/components/games/GameRoomsComponent";
import StyledButton from "@/components/styled/StyledButtonComponent";

export default function Index() {
  const colorScheme = useColorScheme();

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
      <GameRoomsComponent />
      <View style={{ flex: 1, justifyContent: "space-between", alignItems: "flex-start", flexDirection: 'row', gap: 16 }}>
        <StyledButton size="md" text="New online game" onPress={() => {}} />
        <Link href="/game/1" asChild>
          <StyledButton size="md" text="New offline game" />
        </Link>
      </View>
    </View>
  );
}
