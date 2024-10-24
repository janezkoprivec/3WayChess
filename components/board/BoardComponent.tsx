import { View, Text } from "react-native";
import BlackTile from "./tiles/blackTile";
import WhiteTile from "./tiles/whiteTile";
import GreyTile from "./tiles/greyTile";

const BoardComponent = () => {
    return <View>
        <BlackTile style={{width: 100, height: 100}}/>
        <WhiteTile style={{width: 100, height: 100}}/>
        <GreyTile style={{width: 100, height: 100}}/>
    </View>
}

export default BoardComponent;