import { View, StyleSheet, Pressable } from "react-native";
import { Game } from "@/models/db/GameModels";
import { Colors } from "@/constants/Colors";
import StyledText from "@/components/styled/StyledTextComponent";
import StyledButton from "@/components/styled/StyledButtonComponent";

import WhitePawn from "@/components/board/pieces/white/WhitePawn.component";
import BlackPawn from "@/components/board/pieces/black/BlackPawn.component";
import GreyPawn from "@/components/board/pieces/grey/GreyPawn.component";
import { UserAvatarComponent } from "@/components/styled/UserAvatarComponent";
import SelectColorComponent from "@/components/styled/SelectColorComponent";
import { useState } from "react";
import StyledDialog from "@/components/styled/StyledDialogComponent";

interface GameJoinDialogProps {
  game: Game | null;
  visible: boolean;
  onClose: () => void;
  onJoin: (game: Game, selectedColor: string) => void;
}

export default function GameJoinDialog({
  game,
  visible,
  onClose,
  onJoin,
}: GameJoinDialogProps) {
  if (!game) return null;

  const [selectedColor, setSelectedColor] = useState<string>("random");

  return (
    <StyledDialog
      visible={visible}
      onClose={onClose}
      onSubmit={() => onJoin(game, selectedColor)}
      title="Join Game"
      submitButtonText="Join"
    >
      <View style={styles.container}>
        <View>
          <StyledText style={styles.subtitle}>
            Players ({game.players.length}/3)
          </StyledText>
          <View style={styles.playersContainer}>
            {game.players.map((player) => (
              <View key={player._id} style={styles.playerContainer}>
                <UserAvatarComponent
                  imageUrl={player.user.profilePictureUrl}
                  size={24}
                />
                <StyledText>{player.user.username}</StyledText>
                {player.color === "white" ? (
                  <WhitePawn style={{ width: 24, height: 24 }} />
                ) : player.color === "black" ? (
                  <BlackPawn style={{ width: 24, height: 24 }} />
                ) : (
                  <GreyPawn style={{ width: 24, height: 24 }} />
                )}
              </View>
            ))}
          </View>
        </View>
        <View>
          <StyledText style={styles.subtitle}>
            Select your color
          </StyledText>
          <View style={styles.colorContainer}>
            <SelectColorComponent
              availableColors={["white", "black", "grey"].filter(
                (c) => !game.players.map((p) => p.color).includes(c)
              )}
              selectedColor={selectedColor}
              onColorSelect={(color) => setSelectedColor(color)}
            />
          </View>
        </View>
      </View>
    </StyledDialog>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  playersContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  colorContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});
