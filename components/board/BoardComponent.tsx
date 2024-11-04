import React from "react";

import { View, Dimensions } from "react-native";
import { DefaultPositionMatrix, GridColorsMatrix } from "@/constants/GridFieldsMatrix";
import { JSX } from "react";
import TileComponent from "./TileComponent";



const generateBoard = (size: number) => {
  const sideSize = Math.floor(size / 23);
  const hexHeight = 2 * sideSize * Math.sin(Math.PI / 3);

  const board: JSX.Element[] = [];

  GridColorsMatrix.map((row, i) => {
    row.map((color, j) => {
      if (color !== null) {
        board.push(
          <TileComponent key={`${i}-${j}`} color={color} piece={DefaultPositionMatrix[i][j]} hexHeight={hexHeight} sideSize={sideSize} i={i} j={j} />
        );
      }
    });
  });
  return board;
};

const BoardComponent = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const boardSize = Math.min(screenWidth, screenHeight);

  const sideSize = Math.floor(boardSize / 23);
  console.log(sideSize);

  return <View style={{ width: boardSize, height: boardSize }}>
  {generateBoard(boardSize)}

  </View>;
};

export default BoardComponent;
