export type Game = {
  _id: string;
  name: string;
  status: "active" | "waiting" | "finished";
  players: Player[];
  createdBy: Player;
  timeControl: TimeControl;
}

export type User = {
  id: string;
  username: string;
  profilePictureUrl: string;
}

export type Player = {
  id: string;
  user: User;
  color: string;
}

export type TimeControl = {
  type: "rapid" | "blitz" | "bullet";
  time: number; // in seconds
  increment: number; // in seconds
}