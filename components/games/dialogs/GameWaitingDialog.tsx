import { View, StyleSheet } from "react-native";
import StyledDialog from "@/components/styled/StyledDialogComponent";
import StyledText from "@/components/styled/StyledTextComponent";
import { Game } from "@/models/db/GameModels";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { Manager, Socket } from "socket.io-client";
import useAuth from "@/contexts/AuthContext";
import BlitzIcon from "@/components/svg-icons/blitz";
import BulletIcon from "@/components/svg-icons/bullet";
import RapidIcon from "@/components/svg-icons/rapid";
import StyledGameTypeIcon from "@/components/styled/StyledGameTypeIconComponent";
import StyledUserComponent from "@/components/styled/StyledUserComponent";

interface GameWaitingDialogProps {
  visible: boolean;
  game: Game;
  onClose: () => void;
}

export default function GameWaitingDialog({
  visible,
  game,
  onClose,
}: GameWaitingDialogProps) {
  const auth = useAuth();

  return (
    <StyledDialog
      visible={visible}
      title="Waiting for Opponents"
      titleCenter={true}
      onClose={onClose}
      uncloseable={true}
    >
      <View style={styles.container}>
        <StyledText style={styles.text}>
          Game ID: {game.name || game.id}
        </StyledText>
        <StyledGameTypeIcon gameType={game.timeControl.type} />
        <StyledText style={styles.timeControlText}>
          {game.timeControl.time}+{game.timeControl.increment}
        </StyledText>
        <StyledText style={styles.waitingText}>
          Waiting for opponents to join...
        </StyledText>

        {game.players.map((player) => (
          <StyledUserComponent key={player.user._id} user={player.user} color={player.color} />
        ))}
      </View>
    </StyledDialog>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  waitingText: {
    fontSize: 18,
    color: Colors.dark.primary,
    marginTop: 8,
  },
  timeControlText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  timeControlIcon: {
    marginBottom: 8,
  },
});
