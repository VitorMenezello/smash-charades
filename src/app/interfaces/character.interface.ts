import { Moves } from "./moves.interface";

export interface Character {
  id: number;
  name: string;
  echo: boolean;
  moves: Moves;
}
