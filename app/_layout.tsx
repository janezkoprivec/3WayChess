import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import useAuth, { AuthProvider } from "../contexts/AuthContext"
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}
