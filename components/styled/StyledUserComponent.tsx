import { User } from "@/models/db/GameModels";
import { View } from "react-native";
import WhitePawn from "../board/pieces/white/WhitePawn.component";
import BlackPawn from "../board/pieces/black/BlackPawn.component";
import GreyPawn from "../board/pieces/grey/GreyPawn.component";
import { StyleSheet } from "react-native";
import { UserAvatarComponent } from "./UserAvatarComponent";
import StyledText from "./StyledTextComponent";
export default function StyledUserComponent({
  user,
  color,
  displayColor = true,
  textSize = 16,
  iconsSize = 24,
  profilePictureSize = 24,
}: {
  user: User;
  color: string;
  displayColor?: boolean;
  textSize?: number;
  iconsSize?: number;
  profilePictureSize?: number;
}) {
  return (
    <View style={styles.playerContainer}>
      <UserAvatarComponent imageUrl={user.profilePictureUrl ?? ""} size={profilePictureSize} />
      <StyledText style={{ fontSize: textSize }}>{user.username}</StyledText>
      {displayColor && (color === "white" ? (
        <WhitePawn style={{ width: iconsSize, height: iconsSize }} />
      ) : color === "black" ? (
        <BlackPawn style={{ width: iconsSize, height: iconsSize }} />
      ) : (
        <GreyPawn style={{ width: iconsSize, height: iconsSize }} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
