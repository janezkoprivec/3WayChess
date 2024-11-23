import { Colors } from "@/constants/Colors";
import { Game } from "@/models/db/GameModels";
import { View, StyleSheet } from "react-native";
import StyledText from "@/components/styled/StyledTextComponent";
import RapidIcon from "@/components/svg-icons/rapid";
import BlitzIcon from "@/components/svg-icons/blitz";
import BulletIcon from "@/components/svg-icons/bullet";
import { UserAvatarComponent } from "@/components/styled/UserAvatarComponent";
import StyledGameTypeIcon from "@/components/styled/StyledGameTypeIconComponent";

export default function GameListItemComponent({ game }: { game: Game }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <StyledText style={styles.name}>{game.name ?? game.id} </StyledText>
        <StyledText style={styles.players}>({game.players.length}/3)</StyledText>
      </View>

      <View style={styles.container}>

        <View style={styles.nameContainer}>
          {game.players.map((player) => (
            <View key={player.user._id} style={styles.playerContainer}>
              <UserAvatarComponent
                imageUrl={player.user.profilePictureUrl ?? ""}
                size={24}
              />
              <StyledText style={styles.name}>
                {player.user.username}
              </StyledText>
            </View>
          ))}
        </View>

        <View style={styles.endContainer}>
          <StyledGameTypeIcon gameType={game.timeControl.type} />

          <View style={styles.timeControlContainer}>
            {game.timeControl.increment > 0 ? (
              <>
                <StyledText style={styles.timeControl}>
                  {game.timeControl.time}
                </StyledText>
                <StyledText style={styles.timeControl}>|</StyledText>
                <StyledText style={styles.timeControl}>
                  {game.timeControl.increment}
                </StyledText>
              </>
            ) : (
              <StyledText style={styles.timeControl}>
                {game.timeControl.time} min
              </StyledText>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: Colors["dark"].background2,
    padding: 16,
    borderRadius: 8,
    marginBottom: 4,
    display: "flex",
    flexDirection: 'column',
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    gap: 4,
  },
  players: {
    fontWeight: 400,
    color: Colors["dark"].textDimmed,
  },
  container: {
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
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
