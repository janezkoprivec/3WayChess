import { Colors } from "@/constants/Colors";
import { Text, Pressable, ViewStyle, ActivityIndicator } from "react-native";
import { forwardRef } from "react";

export type StyledButtonProps = {
  fontSize?: number;
  size: 'sm' | 'md' | 'lg';
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  loading?: boolean;
}

export default forwardRef<typeof Pressable, StyledButtonProps>(function StyledButton(props, ref) {
  const { size, text, disabled, onPress, style, loading = false } = props;
  const s = size === 'sm' ? 6 : size === 'md' ? 8 : 12;
  const s2 = s + 4; 
  const fontSize = size === 'sm' ? 12 : size === 'md' ? 16 : 20;

  return (
    <Pressable 
      onPress={loading ? undefined : onPress} 
      style={[
        { 
          paddingHorizontal: s2, 
          paddingVertical: s, 
          backgroundColor: Colors["dark"].primary, 
          borderRadius: s, 
          opacity: (disabled || loading) ? 0.5 : 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8
        },
        style
      ]}
    >
      {loading && (
        <ActivityIndicator 
          size={size === 'lg' ? 'small' : 'small'} 
          color={Colors["dark"].text} 
        />
      )}
      <Text style={{ fontSize: fontSize, fontWeight: "bold", color: Colors["dark"].text }}>
        {text}
      </Text>
    </Pressable>
  );
}); 
