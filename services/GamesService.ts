import { Manager, Socket } from "socket.io-client";

export type Game = {
  id: string;
  name: string;
};

class GamesService {
  socketManager: Manager;
  gamesSocket: Socket;
  
  constructor(setGames: (games: Game[]) => void) {
    this.socketManager = new Manager("http://localhost:3000");

    this.gamesSocket = this.socketManager.socket("/games");
  
    this.gamesSocket.on("connect", () => {
      console.log("Connected to games socket");
    });
  
    this.gamesSocket.on("games", (games) => {
      setGames(games);
    });
  }
}

export default GamesService;
