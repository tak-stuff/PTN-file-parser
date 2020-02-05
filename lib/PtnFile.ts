export default interface PtnFile {
  tags: { [key: string]: string };
  moves: string[];
  whiteMoves: string[];
  blackMoves: string[];
}
