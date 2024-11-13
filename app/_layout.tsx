import { Stack } from "expo-router";
import { Colors } from '@/constants/Colors';

export default function RootLayout() {  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors['dark'].background2,
        },
        headerTintColor: Colors['dark'].text,
        contentStyle: {
          backgroundColor: Colors['dark'].background,
        }, 
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: '3WayChess'}}/>
    </Stack>
  );
}
