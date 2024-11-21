import { Colors } from "@/constants/Colors";
import { View, Text, Button, Pressable } from "react-native";
import { forwardRef } from "react";

export type StyledButtonProps = {
  fontSize?: number;
  size: 'sm' | 'md' | 'lg';
  text: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default forwardRef<typeof Pressable, StyledButtonProps>(function StyledButton(props, ref) {
  const { size, text, disabled, onPress } = props;
  const s = size === 'sm' ? 6 : size === 'md' ? 8 : 12;
  const s2 = s + 4; 
  const fontSize = size === 'sm' ? 12 : size === 'md' ? 16 : 20;

  return (
    <Pressable 
      onPress={onPress} 
      style={{ paddingHorizontal: s2, paddingVertical: s, backgroundColor: Colors["dark"].primary, borderRadius: s, opacity: disabled ? 0.5 : 1 }}
    >
      <Text style={{ fontSize: fontSize, fontWeight: "bold", color: Colors["dark"].text }}>
        {text}
      </Text>
    </Pressable>
  );
}); 
