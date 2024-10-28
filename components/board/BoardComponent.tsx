import { View, Text, Dimensions, ViewStyle } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import BlackTile from "./tiles/blackTile";
import WhiteTile from "./tiles/whiteTile";
import GreyTile from "./tiles/greyTile";
import { generateGridPointsMatrix } from "@/utils/PointsMatrixGeneration";
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

  return <View style={{ width: boardSize, height: boardSize }}>{generateBoard(boardSize)}</View>;
};

export default BoardComponent;
