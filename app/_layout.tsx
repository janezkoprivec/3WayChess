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

// import { Colors } from '@/constants/Colors';
// import HeaderComponent from "@/components/general/HeaderComponent";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import useAuth from "@/contexts/AuthContext";
// import { View, Text } from 'react-native';

// const Stack = createNativeStackNavigator();


// export default function RootLayout() {  

//   const { authState, onLogout } = useAuth();

//   return (
//     <View>
//       <Text>Hello</Text>
//     </View>
//     // <NavigationContainer>
//       // <Stack.Navigator>

//       // </Stack.Navigator>
//     // </NavigationContainer>

//       // <Stack
//       //   screenOptions={{
//       //     headerStyle: {
//       //       backgroundColor: Colors['dark'].background2,
//       //     },
//       //     headerTintColor: Colors['dark'].text,
//       //     contentStyle: {
//       //       backgroundColor: Colors['dark'].background,
//       //     }, 
//       //     headerShadowVisible: false,
//       //     header: ({ options }) => <HeaderComponent title={options.title as string} />
//       //   }}
//       // >
//       //   <Stack.Screen options={{ title: '3WayChess'}}/>
//       // </Stack>
//   );
// }