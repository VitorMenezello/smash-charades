export interface Moves {
  basicMoves: Array<Move>;
  tilts: Array<Move>;
  smashes: Array<Move>;
  aerials: Array<Move>;
  specials: Array<Move>;
  throws: Array<Move>;
  taunts: Array<Move>;
  inputMoves?: Array<Move>;
}

export interface Move {
  name: string;
  gif?: string;
}

export const listMoves = (moves: Moves, throws = false, taunts = false, inputMoves = false): Array<Move> => {
  let movesList = [
    ...moves.basicMoves,
    ...moves.tilts,
    ...moves.smashes,
    ...moves.aerials,
    ...moves.specials,
  ];
  if (throws) {
    movesList = movesList.concat(moves.throws);
  }
  if (taunts) {
    movesList = movesList.concat(moves.taunts);
  }
  if (inputMoves && moves.inputMoves) {
    movesList = movesList.concat(moves.inputMoves);
  }
  return movesList;
}
