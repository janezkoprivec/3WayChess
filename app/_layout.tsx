import { Slot, Stack } from "expo-router";
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'dark'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'dark'].text,
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'dark'].background,
        }
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
