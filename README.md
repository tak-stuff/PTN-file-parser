# PTN file parser

[![npm version](https://badge.fury.io/js/ptn-file-parser.svg)](https://badge.fury.io/js/ptn-file-parser)
[![Build Status](https://travis-ci.org/tak-stuff/ptn-file-parser.svg?branch=master)](https://travis-ci.org/tak-stuff/ptn-file-parser)
[![Coverage Status](https://coveralls.io/repos/github/tak-stuff/ptn-file-parser/badge.svg?branch=master)](https://coveralls.io/github/tak-stuff/ptn-file-parser?branch=master)

This package can parse PTN files as they are [defined by the US Tak assosiation](https://ustak.org/portable-tak-notation/).

## Usage

```js
const PTNFileParser = require("ptn-file-parser");
let ptnFile = `[Site "PlayTak.com"]
[Event "Online Play"]
[Date "2018.10.28"]
[Time "16:10:44"]
[Player1 "NohatCoder"]
[Player2 "fwwwwibib"]
[Clock "10:0 +20"]
[Size "6"]

1. a6 f6
2. d4 c4
3. d3 c3
4. d5 c5
5. d2 Ce4
6. c2 e3
7. e2 b2
8. Cb3 1e4<1
9. 1d3<1 Sd1
10. a3 1d1+1`;
let result = PTNFileParser.parsePtnFile(ptnFile);
```

result:

```js
{
  tags: {
    'Site': "PlayTak.com",
    'Event': "Online Play",
    'Date': "2018.10.28",
    'Time': "16:10:44",
    'Player1': "NohatCoder",
    'Player2': "fwwwwibib",
    'Clock': "10:0 +20",
    'Result': "R-0",
    'Size': "6"
  },
  moves: [
    "1. a6 f6",
    "2. d4 c4",
    "3. d3 c3",
    "4. d5 c5",
    "5. d2 Ce4",
    "6. c2 e3",
    "7. e2 b2",
    "8. Cb3 1e4<1",
    "9. 1d3<1 Sd1",
    "10. a3 1d1+1"
  ],
  whiteMoves: [
    "a6", "d4",
    "d3", "d5",
    "d2", "c2",
    "e2", "Cb3",
    "1d3<1", "a3"
  ],
  blackMoves: [
    "f6", "c4",
    "c3", "c5",
    "Ce4", "e3",
    "b2", "1e4<1",
    "Sd1", "1d1+1"
  ]
}
```
