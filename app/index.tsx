import { View } from "react-native";
import { Colors } from "@/constants/Colors";

import GameRoomsComponent from "@/components/games/GamesComponent";

export default function Index() {
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
      <View>
        <GameRoomsComponent />
      </View>
    </View>             
  );
}
