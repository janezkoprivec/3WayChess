import React, { createContext, forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { View, Dimensions, ViewStyle } from "react-native";
import {
  DefaultPositionMatrix,
  GridColorsMatrix,
} from "@/constants/GridFieldsMatrix";
import { JSX } from "react";
import TileComponent from "./TileComponent";
import { Move } from "@/models/db/GameModels";

interface BoardComponentProps {
  style?: ViewStyle;
  onMove?: (move: Move) => void;
}

export type TileIndexTuple = { i: number; j: number };

export const BoardContext = React.createContext<{
  highlited: [TileIndexTuple | null, (tile: TileIndexTuple | null) => void];
  pressed: [TileIndexTuple | null, (tile: TileIndexTuple | null) => void];
}>({ highlited: [null, () => {}], pressed: [null, () => {}] });

export interface BoardRef {
  handleOpponentMove: (move: Move) => void;
}

const generateBoard = (size: number, positionMatrix: (string | null)[][]) => {
  const sideSize = Math.floor(size / 23);
  const hexHeight = 2 * sideSize * Math.sin(Math.PI / 3);

  const board: JSX.Element[][] = [];

  GridColorsMatrix.map((row, i) => {
    board.push([]);
    row.map((color, j) => {
      if (color !== null) {
        board[i][j] = (
          <TileComponent
            key={`${i}-${j}`}
            color={color}
            piece={positionMatrix[i][j]}
            hexHeight={hexHeight}
            sideSize={sideSize}
            i={i}
            j={j}
            highlited={false}
          />
        );
      }
    });
  });
  return board;
};

const BoardComponent = forwardRef<BoardRef, BoardComponentProps>(
  (props: BoardComponentProps, ref: React.Ref<BoardRef>) => {
    const { style, onMove } = props;
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const boardSize = Math.min(screenWidth, screenHeight);

    const [highlightedTile, setHighlightedTile] =
      useState<TileIndexTuple | null>(null);
    const [pressedTile, setPressedTile] = useState<TileIndexTuple | null>(null);

    const movePieceFromHighlightedToPressed = (piece: string) => {
      setBoard(
        board.map((row) =>
          row.map((tile) => {
            if (
              tile.props.i === pressedTile!.i &&
              tile.props.j === pressedTile!.j
            ) {
              return (
                <TileComponent
                  key={`${tile.props.i}-${tile.props.j}`}
                  {...tile.props}
                  piece={piece}
                ></TileComponent>
              );
            } else if (
              tile.props.i === highlightedTile!.i &&
              tile.props.j === highlightedTile!.j
            ) {
              return (
                <TileComponent
                  key={`${tile.props.i}-${tile.props.j}`}
                  {...tile.props}
                  piece={null}
                ></TileComponent>
              );
            }
            return tile;
          })
        )
      );
    };

    const moveOnBoard = (move: Move) => {
      const piece = board[move.from.i][move.from.j].props.piece;
      setBoard(
        board.map((row) =>
          row.map((tile) => {
            if (
              tile.props.i === move.to.i &&
              tile.props.j === move.to.j
            ) {
              return (
                <TileComponent
                  key={`${tile.props.i}-${tile.props.j}`}
                  {...tile.props}
                  piece={piece}
                ></TileComponent>
              );
            } else if (
              tile.props.i === move.from.i &&
              tile.props.j === move.from.j
            ) {
              return (
                <TileComponent
                  key={`${tile.props.i}-${tile.props.j}`}
                  {...tile.props}
                  piece={null}
                ></TileComponent>
              );
            }
            return tile;
          })
        )
      );
    }

    const handleOpponentMove = (move: Move) => {
      moveOnBoard(move);
    }

    // expose handleOpponentMove to the parent component
    useImperativeHandle(ref, () => ({
      handleOpponentMove
    }));

    useEffect(() => {
      if (pressedTile === null) return;
      if (highlightedTile !== null && highlightedTile !== pressedTile) {
        
        const move = { from: highlightedTile, to: pressedTile };
        // try to do a move
        const tile1 = board[highlightedTile.i][highlightedTile.j];
        const tile2 = board[pressedTile!.i][pressedTile!.j];

        if (tile1.props.piece !== null && tile2.props.piece !== null) {
          if (tile1.props.piece.charAt(0) === tile2.props.piece.charAt(0)) {
            // same color
            setHighlightedTile(pressedTile);
          } else {
            // eat another piece
            movePieceFromHighlightedToPressed(tile1.props.piece);
            setHighlightedTile(null);
            onMove?.({ from: highlightedTile, to: pressedTile });
          }
        } else {
          movePieceFromHighlightedToPressed(tile1.props.piece);
          setHighlightedTile(null);
          onMove?.({ from: highlightedTile, to: pressedTile });
        }
      } else {
        // set highlighted if there is a piece on the tile
        if (board[pressedTile!.i][pressedTile!.j].props.piece !== null) {
          setHighlightedTile(pressedTile);
        }
      }
    }, [pressedTile]);

    const [board, setBoard] = useState<JSX.Element[][]>(
      generateBoard(boardSize, DefaultPositionMatrix)
    );

    useEffect(() => {}, [highlightedTile]);
    return (
      <BoardContext.Provider
        value={{
          highlited: [highlightedTile, setHighlightedTile],
          pressed: [pressedTile, setPressedTile],
        }}
      >
        <View style={{ width: boardSize, height: boardSize, ...style }}>
          {board}
        </View>
      </BoardContext.Provider>
    );
  }
);

export default BoardComponent;
