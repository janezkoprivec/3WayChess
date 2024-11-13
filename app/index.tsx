import { Link } from "expo-router";
import { Button, Platform, View, Text } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

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
      <Link href="/game/1" asChild>
        <View style={{padding: 16, backgroundColor: Colors["dark"].primary, borderRadius: 16}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors["dark"].text,
            }}
          >
            Start an offline game
          </Text>
        </View>
      </Link>
    </View>
  );
}
