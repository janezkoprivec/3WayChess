import { View } from "react-native";
import BlitzIcon from "../svg-icons/blitz";
import BulletIcon from "../svg-icons/bullet";
import RapidIcon from "../svg-icons/rapid";
import { StyleSheet } from "react-native";

export default function StyledGameTypeIcon({gameType}: {gameType: string}) {
    return (
      <View style={styles.timeControlIcon}>
      {gameType === "rapid" ? (
        <RapidIcon width={24} height={24} />
      ) : gameType === "blitz" ? (
        <BlitzIcon width={24} height={24} />
      ) : (
        <BulletIcon width={24} height={24} />
      )}
    </View>
    );
}

const styles = StyleSheet.create({
  timeControlIcon: {
    marginRight: 4,
  },
});