import React from "react";

import { View, Text, Dimensions, ViewStyle } from "react-native";
import Svg, { Polygon, SvgUri } from "react-native-svg";
import {
  HexagonPoints,
  HexagonPointsUpscaled,
  HexagonPointsUpscaled1,
  HexagonPointsUpscaled2,
  HexagonPointsUpscaled3,
} from "@/constants/HexagonConstants";
import { GridPointsMatrix } from "@/constants/GridFieldsMatrix";
import { JSX } from "react";
import { Colors } from "@/constants/Colors";
import WhiteKing from "./pieces/white/WhiteKing.component";
import WhiteQueen from "./pieces/white/WhiteQueen.component";
import BlackQueen from "./pieces/black/BlackQueen.component";
import BlackKing from "./pieces/black/BlackKing.component";
import GreyKing from "./pieces/grey/GreyKing.component";
import BlackKnight from "./pieces/black/BlackKnight.component";
import BlackBishop from "./pieces/black/BlackBishop.component";
import BlackPawn from "./pieces/black/BlackPawn.component";
import BlackRook from "./pieces/black/BlackRook.component";
import WhiteBishop from "./pieces/white/WhiteBishop.component";
import WhiteKnight from "./pieces/white/WhiteKnight.component";
import WhiteRook from "./pieces/white/WhiteRook.component";
import WhitePawn from "./pieces/white/WhitePawn.component";
import GreyBishop from "./pieces/grey/GreyBishop.component";
import GreyKnight from "./pieces/grey/GreyKnight.component";
import GreyPawn from "./pieces/grey/GreyPawn.component";
import GreyQueen from "./pieces/grey/GreyQueen.component";
import GreyRook from "./pieces/grey/GreyRook.component";

const colorResolver = (color: string) => {
  return color === "b"
    ? Colors.board.black
    : color === "w"
    ? Colors.board.white
    : color === "g"
    ? Colors.board.gray
    : "red";
};

const generateBoard = (size: number) => {
  const sideSize = Math.floor(size / 23);
  const hexHeight = 2 * sideSize * Math.sin(Math.PI / 3);

  const hexPointsString = HexagonPoints.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const hexPointsStringUpscaled = HexagonPointsUpscaled.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const hexPointsStringUpscaled1 = HexagonPointsUpscaled1.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const hexPointsStringUpscaled2 = HexagonPointsUpscaled2.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const hexPointsStringUpscaled3 = HexagonPointsUpscaled3.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const board: JSX.Element[] = [];

  GridPointsMatrix.map((row, i) => {
    row.map((field, j) => {
      if (field !== null) {
        board.push(
          <Svg
            key={`${i}-${j}`}
            width={2 * sideSize + 4}
            height={hexHeight + 4}
            style={{
              position: "absolute",
              top: hexHeight * i + (j % 2 === 1 ? 0 : hexHeight / 2),
              left: (sideSize + Math.cos(Math.PI / 3) * sideSize) * j,
            }}
          >
            <Polygon
              points={
                field.color === "w"
                  ? hexPointsStringUpscaled3
                  : field.color === "b"
                  ? hexPointsStringUpscaled1
                  : hexPointsStringUpscaled2
              }
              fill={colorResolver(field.color)}
            />
          </Svg>
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
