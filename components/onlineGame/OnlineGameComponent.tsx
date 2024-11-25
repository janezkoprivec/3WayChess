import { Dimensions, View, StyleSheet } from "react-native";
import BoardComponent, { BoardRef } from "../board/BoardComponent";
import { Game, Move, PlayerMove } from "@/models/db/GameModels";
import StyledUserComponent from "../styled/StyledUserComponent";
import { Socket } from "socket.io-client";
import { useRef } from "react";
import StyledButtonComponent from "../styled/StyledButtonComponent";
import useAuth from "@/contexts/AuthContext";

export default function OnlineGameComponent({ game, gameSocket }: { game: Game, gameSocket: Socket | null }) {
  const auth = useAuth();
  
  const boardRef = useRef<BoardRef>(null);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const ratio = windowWidth / windowHeight;

  let margin = 16;
  if (ratio > 1) {
    margin = (windowWidth - windowHeight) / 2 - 16;
  }

  const player1 = game.players.find((player) => player.color === "white");
  const player2 = game.players.find((player) => player.color === "black");
  const player3 = game.players.find((player) => player.color === "grey");


  let latestMove: Move | null = null; 
  const moveHandler = (move: Move) => {
    gameSocket?.emit("move", {move, userId: auth.authState?.user?.id});
    latestMove = move;
  }

  const handleMove = (move: PlayerMove) => {
    if (move.userId === auth.authState?.user?.id) return;
    boardRef.current?.handleOpponentMove(move.move);
  }

  gameSocket?.on("move", handleMove);

  //TODO: idea: display opponents only as profile pictures on smaller screens and normally on bigger screens

  return (
    <View style={styles.wrapper}>
      <View style={styles.board}>
        <BoardComponent onMove={moveHandler} ref={boardRef}/>
      </View>

      <View style={{position: "absolute", bottom: 44, left: (margin + windowHeight/2 - 40)}}>
        {player1 && (
          <StyledUserComponent user={player1.user} color={player1.color} displayColor={false} profilePictureSize={48} textSize={20}/>
        )}
      </View>
      <View style={{position: "absolute", top: 64, left: margin}}>
        {player2 && (
          <StyledUserComponent user={player2.user} color={player2.color} displayColor={false} profilePictureSize={48} textSize={20}/>
        )}
      </View>
      <View style={{position: "absolute", top: 64, right: margin+40}}>
        {player3 && (
          <StyledUserComponent user={player3.user} color={player3.color} displayColor={false} profilePictureSize={48} textSize={20}/>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  board: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
});
