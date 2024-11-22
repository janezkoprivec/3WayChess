import { Redirect, Stack } from "expo-router";
import useAuth from "../../contexts/AuthContext";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import HeaderComponent from "@/components/general/HeaderComponent";
import { useEffect } from "react";

export default function AppLayout() {
  const { authState } = useAuth();

  if (authState?.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.dark.background,
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!authState?.authenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors["dark"].background2,
        },
        headerTintColor: Colors["dark"].text,
        contentStyle: {
          backgroundColor: Colors["dark"].background,
        },
        headerShadowVisible: false,
        header: () => (
          <HeaderComponent title="3WayChess" />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "3WayChess" }} />
    </Stack>
  );
}
