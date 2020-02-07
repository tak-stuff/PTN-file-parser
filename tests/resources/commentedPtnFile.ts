export const commentedPtnFile = {
  string: `[Site "PlayTak.com"]
[Event "Online Play"]
[Date "2018.10.28"]
[Time "16:10:44"]
[Player1 "NohatCoder"]
[Player2 "fwwwwibib"]
[Clock "10:0 +20"]
[Result "R-0"]
[Size "6"]

1. a6 f6
2. {A comment?!*} {a second comment} d4 c4!! {What a fabulous move}
3. d3 c3
4. d5 {Player2 thought a lot about that one} c5`,
  parsed: {
    tags: {
      Site: 'PlayTak.com',
      Event: 'Online Play',
      Date: '2018.10.28',
      Time: '16:10:44',
      Player1: 'NohatCoder',
      Player2: 'fwwwwibib',
      Clock: '10:0 +20',
      Result: 'R-0',
      Size: '6'
    },
    moves: [
      '1. a6 f6',
      '2. {A comment?!*} {a second comment} d4 c4!! {What a fabulous move}',
      '3. d3 c3',
      '4. d5 {Player2 thought a lot about that one} c5'
    ],
    whiteMoves: ['a6', 'd4', 'd3', 'd5'],
    blackMoves: ['f6', 'c4', 'c3', 'c5']
  }
};
