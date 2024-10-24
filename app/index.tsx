import { Link } from "expo-router";
import { Button, Pressable,Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/game/1" asChild>
        <Button title="Go to game" onPress={() => {}}/>
      </Link>
    </View>
  );
}
