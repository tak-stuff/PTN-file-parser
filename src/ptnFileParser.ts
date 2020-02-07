const commentRegex = /\[(\S+) [\"\'](.*?)[\"\']\]/g;
const moveRegex = /(?:\s)((\d+)\. (?:{.*?} )*((?:\d)?(?:[CS])?[a-h][1-8](?:[<>+-](?:[1-8]+)?)?)([\*'!?]+)? (?:{.*?} )*((?:\d)?(?:[CS])?[a-h][1-8](?:[<>+-](?:[1-8]+)?)?)([\*'!?]+)?(?: {.*?})*)/g;

export interface PtnFile {
  tags: { [key: string]: string };
  moves: string[];
  whiteMoves: string[];
  blackMoves: string[];
}

export function parsePtnFile(ptnFile: string): PtnFile {
  const tags: { [index: string]: string } = {};
  let tag = commentRegex.exec(ptnFile);
  while (tag !== null) {
    tags[tag[1]] = tag[2];
    tag = commentRegex.exec(ptnFile);
  }
  const moves: string[] = [];
  const whiteMoves: string[] = [];
  const blackMoves: string[] = [];
  let move = moveRegex.exec(ptnFile);
  let round = 1;
  while (move != null) {
    if (round.toString() !== move[2]) {
      throw new Error(`Invalid PNG file (inconsistent move number indicators). Expected ${round}, got ${move[2]}`);
    }
    moves.push(move[1]);
    whiteMoves.push(move[3]);
    blackMoves.push(move[5]);
    move = moveRegex.exec(ptnFile);
    round++;
  }
  return {
    tags,
    moves,
    whiteMoves,
    blackMoves
  };
}
