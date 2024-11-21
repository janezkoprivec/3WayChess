import { Stack } from "expo-router";
import { Colors } from '@/constants/Colors';
import HeaderComponent from "@/components/general/HeaderComponent";
import { UserProvider, useUser } from '@/contexts/UserContext';

export default function RootLayout() {  
  
  return (
    <UserProvider>
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
          header: ({ options }) => <HeaderComponent title={options.title as string} />
        }}
      >
        <Stack.Screen name="index" options={{ title: '3WayChess'}}/>
      </Stack>
    </UserProvider>
  );
}
