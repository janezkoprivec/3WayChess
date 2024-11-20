import { Colors } from "@/constants/Colors";
import { Game } from "@/models/db/GameModels";
import { View, StyleSheet } from "react-native";
import StyledText from "@/components/styled/StyledTextComponent";
import RapidIcon from "@/components/svg-icons/rapid";
import BlitzIcon from "@/components/svg-icons/blitz";
import BulletIcon from "@/components/svg-icons/bullet";

export default function GameListItemComponent({ game }: { game: Game }) {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <StyledText style={styles.name}>
          {game.players[0] ? game.players[0].user.username : "(empty)"} 
        </StyledText>
        <StyledText style={styles.name}>
          {game.players[1] ? game.players[1].user.username : "(empty)"} 
        </StyledText>
        <StyledText style={styles.name}>
          {game.players[2] ? game.players[2].user.username : "(empty)"} 
        </StyledText>
      </View>

      <View style={styles.endContainer}>
        <View style={styles.timeControlIcon}>
          {game.timeControl.type === "rapid" ? <RapidIcon width={24} height={24} /> : game.timeControl.type === "blitz" ? <BlitzIcon width={24} height={24} /> : <BulletIcon width={24} height={24} />}
        </View>

        <View style={styles.timeControlContainer}>
          {game.timeControl.increment > 0 ? (
            <>
              <StyledText style={styles.timeControl}>
                {game.timeControl.time / 60}
              </StyledText>
              <StyledText style={styles.timeControl}>|</StyledText>
              <StyledText style={styles.timeControl}>
                {game.timeControl.increment}
              </StyledText>
            </>
          ) : (
            <StyledText style={styles.timeControl}>
              {game.timeControl.time / 60} min
            </StyledText>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors["dark"].background2,
    padding: 16,
    borderRadius: 8,
    width: "100%",
    marginBottom: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
  },
  name: {
    fontSize: 14,
    fontWeight: 700,
  },
  nameContainer: {
    marginLeft: 8,
    flex: 3,
    flexDirection: "column",
    gap: 4,
  },
  timeControlContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "flex-end",
  },
  timeControl: {
    fontSize: 16,
    fontWeight: 700,
  },
  timeControlIcon: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  endContainer: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
