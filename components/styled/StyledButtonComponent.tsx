import { Colors } from "@/constants/Colors";
import { View, Text, Button, Pressable } from "react-native";
import { forwardRef } from "react";

export type StyledButtonProps = {
  fontSize?: number;
  size: 'sm' | 'md' | 'lg';
  text: string;
  onPress?: () => void;
}

export default forwardRef<typeof Pressable, StyledButtonProps>(function StyledButton(props, ref) {
  const { fontSize = 20, size, text, onPress } = props;
  const s = size === 'sm' ? 8 : size === 'md' ? 12 : 16;

  return (
    <Pressable 
      onPress={onPress} 
      style={{ padding: s, backgroundColor: Colors["dark"].primary, borderRadius: s }}
    >
      <Text style={{ fontSize: fontSize, fontWeight: "bold", color: Colors["dark"].text }}>
        {text}
      </Text>
    </Pressable>
  );
}); 
