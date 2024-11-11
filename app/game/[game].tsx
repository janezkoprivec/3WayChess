import * as React from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardComponent from '@/components/board/BoardComponent';

function GameScreen() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const boardSize = Math.min(screenWidth, screenHeight);

  return (
    <View style={{ flex: 1 }}>
      <View style={{marginTop: 16, marginLeft: 16 }}>
          <BoardComponent />
      </View>
    </View>
  );
}

export default GameScreen;