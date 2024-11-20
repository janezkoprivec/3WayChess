import { View, Modal, StyleSheet, Pressable } from "react-native";
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

interface GameJoinDialogProps {
  game: Game | null;
  visible: boolean;
  onClose: () => void;
  onJoin: (gameId: string) => void;
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
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable 
          onPress={(event) => event.stopPropagation()}
          style={styles.dialogContainer}
        >
          <View
            onStartShouldSetResponder={() => true}
            style={{ width: "100%", height: "100%" }}
          >
            <StyledText style={styles.title}>Join Game</StyledText>
            <View style={styles.container}>
              <View>
                <StyledText style={styles.subtitle}>
                  Players ({game.players.length}/3)
                </StyledText>
                <View style={styles.playersContainer}>
                  {game.players.map((player) => (
                    <View key={player.id} style={styles.playerContainer}>
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

            <View style={styles.buttonContainer}>
              <StyledButton size="md" text="Cancel" onPress={onClose} />
              <StyledButton
                size="md"
                text="Join"
                onPress={() => onJoin(game._id)}
              />
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogContainer: {
    backgroundColor: Colors.dark.background,
    borderRadius: 8,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
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
