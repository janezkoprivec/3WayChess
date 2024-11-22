import { Colors } from "@/constants/Colors"
import { TextInput, StyleSheet, TextInputProps, View, Text } from "react-native"

interface StyledInputProps extends TextInputProps {
  error?: string;
}

export default function StyledInputComponent({ error, ...props }: StyledInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null
        ]}
        {...props}
      />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: Colors.dark.background2,
    color: Colors.dark.text,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: Colors.dark.error || '#ff4444',
  },
  errorText: {
    color: Colors.dark.error || '#ff4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2,
  },
})