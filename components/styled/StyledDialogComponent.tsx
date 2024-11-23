import { View, Modal, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import StyledText from "@/components/styled/StyledTextComponent";
import StyledButton from "@/components/styled/StyledButtonComponent";
import { ReactNode } from "react";

interface StyledDialogProps {
  visible: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title: string;
  children: ReactNode;
  closeButtonText?: string;
  submitButtonText?: string;
  uncloseable?: boolean;
  titleCenter?: boolean;
}

export default function StyledDialog({
  visible,
  onClose,
  onSubmit,
  title,
  children,
  closeButtonText = "Cancel",
  submitButtonText = "Submit",
  uncloseable = false,
  titleCenter = false,
}: StyledDialogProps) {
  const handleOverlayPress = () => {
    if (!uncloseable && onClose) {
      onClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        if (!uncloseable && onClose) {
          onClose();
        }
      }}
    >
      <Pressable style={styles.overlay} onPress={handleOverlayPress}>
        <Pressable 
          onPress={(event) => event.stopPropagation()}
          style={styles.dialogContainer}
        >
          <View
            onStartShouldSetResponder={() => true}
            style={styles.dialogContent}
          >
            <View style={{alignItems: titleCenter ? "center" : "flex-start", width: "100%"}}>  
              <StyledText style={styles.title}>{title}</StyledText>
            </View>
            
            {children}

            <View style={styles.buttonContainer}>
              {onClose && (
                <StyledButton 
                  size="md" 
                  text={closeButtonText} 
                  onPress={onClose} 
                />
              )}
              {onSubmit && (
                <StyledButton
                  size="md"
                  text={submitButtonText}
                  onPress={onSubmit}
                />
              )}
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
    padding: 16,
  },
  dialogContainer: {
    backgroundColor: Colors.dark.background,
    borderRadius: 8,
    padding: 20,
    gap: 16,
    minWidth: 300,
    maxWidth: '90%',
    width: 'auto',
    alignSelf: 'center',
  },
  dialogContent: {
    flexDirection: "column",
    gap: 16,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
});
