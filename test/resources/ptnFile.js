let simplePtnFile = `[Site "PlayTak.com"]
[Event "Online Play"]
[Date "2018.10.28"]
[Time "16:10:44"]
[Player1 "NohatCoder"]
[Player2 "fwwwwibib"]
[Clock "10:0 +20"]
[Result "R-0"]
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
10. a3 1d1+1`

let commentedPtnFile = `[Site "PlayTak.com"]
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
4. d5 {Player2 thought a lot about that one} c5`

exports.simplePtnFile = simplePtnFile;
exports.commentedPtnFile = commentedPtnFile;
