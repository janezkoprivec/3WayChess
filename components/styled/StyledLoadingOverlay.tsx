import { Modal, StyleSheet, ActivityIndicator, View } from "react-native";
import { Colors } from "@/constants/Colors";

interface StyledLoadingOverlayProps {
  visible: boolean;
}

export default function StyledLoadingOverlay({ visible }: StyledLoadingOverlayProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color={Colors.dark.primary} style={{ transform: [{ scale: 2 }] }}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});
