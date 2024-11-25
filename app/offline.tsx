import * as React from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardComponent from '@/components/board/BoardComponent';
import { Colors } from '@/constants/Colors';

function GameScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark.background, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <View style={{marginTop: 32}}>
          <BoardComponent />
      </View>
    </View>
  );
}

export default GameScreen;