import { expect } from 'chai';
import PtnFileParser from '../lib/PtnFileParser';
import { commentedPtnFile } from './resources/commentedPtnFile';
import { missingMovePtnFile } from './resources/missingMovePtnFile';
import { simplePtnFile } from './resources/simplePtnFile';

describe('PtnFileParser', () => {
  it('should return empty tags and moves for empty input', () => {
    const result = PtnFileParser.parsePtnFile('');
    expect(result).to.deep.equal({
      tags: {},
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });

  it('should return tag', () => {
    const result = PtnFileParser.parsePtnFile('[test "Test Value 123!.com"]');
    expect(result).to.deep.equal({
      tags: { test: 'Test Value 123!.com' },
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });

  it('should throw error when a move is missing', () => {
    expect(() => PtnFileParser.parsePtnFile(missingMovePtnFile)).to.throw();
  });

  it('should return tags', () => {
    const result = PtnFileParser.parsePtnFile('[test "Test Value 123!.com"] [AnotherTest2 "Some value"]');
    expect(result).to.deep.equal({
      tags: { test: 'Test Value 123!.com', AnotherTest2: 'Some value' },
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });

  it('should return full parsed file', () => {
    const result = PtnFileParser.parsePtnFile(simplePtnFile.string);
    expect(result).to.deep.equal(simplePtnFile.parsed);
  });

  it('should be able to handle comments', () => {
    const result = PtnFileParser.parsePtnFile(commentedPtnFile.string);
    expect(result).to.deep.equal(commentedPtnFile.parsed);
  });
});
