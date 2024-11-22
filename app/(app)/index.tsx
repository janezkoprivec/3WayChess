import GameRoomsComponent from "@/components/games/GamesComponent";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {

  return (
    <>
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

    </>
  );  
}