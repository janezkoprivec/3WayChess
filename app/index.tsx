import { Link } from "expo-router";
import { Button, View } from "react-native";
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Index() {
  const colorScheme = useColorScheme();
    
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors[colorScheme ?? 'dark'].background,
      }}
    >
      <Link href="/game/1" asChild>
        <Button 
          title="Go to game" 
          color={Colors[colorScheme ?? 'dark'].tint}
          onPress={() => {}}
        />
      </Link>
    </View>
  );
}
