import { Colors } from "@/constants/Colors";
import { View, Text, Button, Pressable } from "react-native";

export type StyledButtonProps = {
  fontSize?: number;
  size: 'sm' | 'md' | 'lg';
  text: string;
  onPress?: () => void;
}

export default function StyledButton({ fontSize = 20, size, text, onPress }: StyledButtonProps) {
  const s = size === 'sm' ? 8 : size === 'md' ? 12 : 16;

  return (
    <Pressable onPress={onPress} style={{ padding: s, backgroundColor: Colors["dark"].primary, borderRadius: s }}>
      <Text style={{ fontSize: fontSize, fontWeight: "bold", color: Colors["dark"].text }}>
        {text}
      </Text>
    </Pressable>
  );
} 
