import GameRoomsComponent from "@/components/games/GamesComponent";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {

  return (
      <View
        id="test123"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors["dark"].background,
          alignSelf: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <GameRoomsComponent />
      </View>

  );  
}