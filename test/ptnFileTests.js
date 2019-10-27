"use strict";
const expect = require("chai").expect;
const ptnFile = require('./resources/ptnFile')

const PTNFileParser = require("../dist/index");
describe("parsing PTN file test", () => {
  it("should return empty tags and moves for empty input", () => {
    var result = PTNFileParser.parsePtnFile();
    expect(result).to.deep.equal({
      tags: {},
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });
  it("should return tag", () => {
    var result = PTNFileParser.parsePtnFile("[test \"Test Value 123!.com\"]");
    expect(result).to.deep.equal({
      tags: {test: "Test Value 123!.com"},
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });
  it("should return tags", () => {
    var result = PTNFileParser.parsePtnFile("[test \"Test Value 123!.com\"] [AnotherTest2 \"Some value\"]");
    expect(result).to.deep.equal({
      tags: {test: "Test Value 123!.com", AnotherTest2: "Some value"},
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });
  it("should return full parsed file", () => {
    var result = PTNFileParser.parsePtnFile(ptnFile.simplePtnFile);
    expect(result).to.deep.equal({
      tags: {'Site': "PlayTak.com", 'Event': "Online Play", 'Date': "2018.10.28", 'Time': "16:10:44", 'Player1': "NohatCoder", 'Player2': "fwwwwibib", 'Clock': "10:0 +20", 'Result': "R-0", 'Size': "6"},
      moves: ["1. a6 f6", "2. d4 c4", "3. d3 c3", "4. d5 c5", "5. d2 Ce4", "6. c2 e3", "7. e2 b2", "8. Cb3 1e4<1", "9. 1d3<1 Sd1", "10. a3 1d1+1"],
      whiteMoves: ["a6", "d4", "d3", "d5", "d2", "c2", "e2", "Cb3", "1d3<1", "a3"],
      blackMoves: ["f6", "c4", "c3", "c5", "Ce4", "e3", "b2", "1e4<1", "Sd1", "1d1+1"]
    });
  });
  it("should be able to handle comments", () => {
    var result = PTNFileParser.parsePtnFile(ptnFile.commentedPtnFile);
    expect(result).to.deep.equal({
      tags: {'Site': "PlayTak.com", 'Event': "Online Play", 'Date': "2018.10.28", 'Time': "16:10:44", 'Player1': "NohatCoder", 'Player2': "fwwwwibib", 'Clock': "10:0 +20", 'Result': "R-0", 'Size': "6"},
      moves: ["1. a6 f6", "2. {A comment?!*} {a second comment} d4 c4!! {What a fabulous move}", "3. d3 c3", "4. d5 {Player2 thought a lot about that one} c5"],
      whiteMoves: ["a6", "d4", "d3", "d5"],
      blackMoves: ["f6", "c4", "c3", "c5"]
    });
  });
});
