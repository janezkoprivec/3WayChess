export type Game = {
  _id: string;
  name: string;
  status: "active" | "waiting" | "finished";
  players: Player[];
  createdBy: Player;
  timeControl: TimeControl;
}

export type User = {
  _id: string;
  username: string;
  profilePictureUrl: string;
}

export type Player = {
  _id: string;
  user: User;
  color: string;
}

export type TimeControl = {
  type: "rapid" | "blitz" | "bullet";
  time: number; // in seconds
  increment: number; // in seconds
}