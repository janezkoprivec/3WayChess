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
}: {
  user: User;
  color: string;
}) {
  return (
    <View style={styles.playerContainer}>
      <UserAvatarComponent imageUrl={user.profilePictureUrl ?? ""} size={24} />
      <StyledText>{user.username}</StyledText>
      {color === "white" ? (
        <WhitePawn style={{ width: 24, height: 24 }} />
      ) : color === "black" ? (
        <BlackPawn style={{ width: 24, height: 24 }} />
      ) : (
        <GreyPawn style={{ width: 24, height: 24 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
});
