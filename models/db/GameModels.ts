export type Game = {
  id: string;
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
  user: User;
  color: string;
}

export type TimeControl = {
  name: string;
  type: "rapid" | "blitz" | "bullet";
  time: number; // in minutes
  increment: number; // in seconds
}

export type Position = {
  i: number;
  j: number;
}

export type Move = {
  from: Position;
  to: Position;
}

export type PlayerMove = {
  move: Move;
  userId: string;
}