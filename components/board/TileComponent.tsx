import { TouchableOpacity, View } from "react-native";
import React from "react";
import { ViewStyle } from "react-native";

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
import {
  HexagonPointsUpscaled1,
  HexagonPointsUpscaled2,
  HexagonPointsUpscaled3,
} from "@/constants/HexagonConstants";
import Svg, { Polygon } from "react-native-svg";
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

const resolveComponent = (piece: string | null, style?: ViewStyle) => {
  switch (piece) {
    // White pieces
    case "wK":
      return <WhiteKing style={style} />;
    case "wQ":
      return <WhiteQueen style={style} />;
    case "wB":
      return <WhiteBishop style={style} />;
    case "wN":
      return <WhiteKnight style={style} />;
    case "wR":
      return <WhiteRook style={style} />;
    case "wP":
      return <WhitePawn style={style} />;

    // Black pieces
    case "bK":
      return <BlackKing style={style} />;
    case "bQ":
      return <BlackQueen style={style} />;
    case "bB":
      return <BlackBishop style={style} />;
    case "bN":
      return <BlackKnight style={style} />;
    case "bR":
      return <BlackRook style={style} />;
    case "bP":
      return <BlackPawn style={style} />;

    // Grey pieces
    case "gK":
      return <GreyKing style={style} />;
    case "gQ":
      return <GreyQueen style={style} />;
    case "gB":
      return <GreyBishop style={style} />;
    case "gN":
      return <GreyKnight style={style} />;
    case "gR":
      return <GreyRook style={style} />;
    case "gP":
      return <GreyPawn style={style} />;
    default:
      return null;
  }
};

interface TileComponentProps {
  style?: ViewStyle;
  color: string;
  piece: string | null;
  hexHeight: number;
  sideSize: number;
  i: number;
  j: number;
}

const TileComponent: React.FC<TileComponentProps> = ({
  style,
  color,
  piece,
  hexHeight,
  sideSize,
  i,
  j,
}) => {
  const hexPointsStringUpscaled1 = HexagonPointsUpscaled1.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const hexPointsStringUpscaled2 = HexagonPointsUpscaled2.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const hexPointsStringUpscaled3 = HexagonPointsUpscaled3.map(
    (point) => `${point.x * sideSize},${point.y * sideSize}`
  ).join(" ");

  const handlePress = () => {
    console.log(`${i}-${j}`);
  };

  return (
    <View
      key={`${i}-${j}`}
      style={{
        position: "absolute",
        top: hexHeight * i + (j % 2 === 1 ? 0 : hexHeight / 2),
        left: (sideSize + Math.cos(Math.PI / 3) * sideSize) * j,
      }}
    >
      <TouchableOpacity
        onPress={handlePress}
      >
        <Svg
          key={`${i}-${j}`}
          width={2 * sideSize + 4}
          height={hexHeight + 4}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <Polygon
            points={
              color === "w"
                ? hexPointsStringUpscaled3
                : color === "b"
                ? hexPointsStringUpscaled1
                : hexPointsStringUpscaled2
            }
            fill={colorResolver(color)}
          />
        </Svg>
        {resolveComponent(piece, {
          width: sideSize * 1.5,
          height: sideSize * 1.5,
          position: "absolute",
          left: sideSize / 4,
          top: sideSize / 6,
        })}
      </TouchableOpacity>
    </View>
  );
};

export default TileComponent;
