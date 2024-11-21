import { useState } from 'react';
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { UsernamePromptDialog } from '../components/dialogs/UsernamePromptDialog';

import GameRoomsComponent from "@/components/games/GamesComponent";
import { useUser } from '@/contexts/UserContext';

export default function App() {
  const { user, setUser } = useUser();
  
  // Show dialog if username is not set
  const showUsernamePrompt = !user;
  
  const handleUsernameSubmit = (newUsername: string) => {
    setUser({
      _id: 'testid',
      username: newUsername,
      profilePictureUrl: user?.profilePictureUrl || '',
    });
    // Here you might want to save the username to your storage/backend
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors["dark"].background,
          height: "100%",
          alignSelf: "center",
        }}
      >
        <View>
          <GameRoomsComponent />
        </View>
      </View>
      
      <UsernamePromptDialog
        isVisible={showUsernamePrompt}
        onSubmit={handleUsernameSubmit}
      />
    </>
  );
}
