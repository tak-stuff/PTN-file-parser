import { expect } from 'chai';
import { parsePtnFile, PtnFile } from '../src/ptnFileParser';
import { commentedPtnFile } from './resources/commentedPtnFile';
import { missingMovePtnFile } from './resources/missingMovePtnFile';
import { simplePtnFile } from './resources/simplePtnFile';

const emptyPtnFile: PtnFile = {
  tags: {},
  moves: [],
  whiteMoves: [],
  blackMoves: []
};

describe('PtnFileParser', () => {
  it('should return empty tags and moves for empty input', () => {
    const result = parsePtnFile('');
    expect(result).to.deep.equal(emptyPtnFile);
  });

  it('should return tag', () => {
    const result = parsePtnFile('[test "Test Value 123!.com"]');
    expect(result).to.deep.equal({
      tags: { test: 'Test Value 123!.com' },
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });

  it('can handle malformed tags', () => {
    expect(parsePtnFile('[tag test]')).to.deep.equal(emptyPtnFile);
  });

  it('ignores tags without key', () => {
    expect(parsePtnFile('[ "test"]')).to.deep.equal(emptyPtnFile);
  });

  it('should throw error when a move is missing', () => {
    expect(() => parsePtnFile(missingMovePtnFile)).to.throw();
  });

  it('should return tags', () => {
    const result = parsePtnFile('[test "Test Value 123!.com"] [AnotherTest2 "Some value"]');
    expect(result).to.deep.equal({
      tags: { test: 'Test Value 123!.com', AnotherTest2: 'Some value' },
      moves: [],
      whiteMoves: [],
      blackMoves: []
    });
  });

  it('should return full parsed file', () => {
    const result = parsePtnFile(simplePtnFile.string);
    expect(result).to.deep.equal(simplePtnFile.parsed);
  });

  it('should be able to handle comments', () => {
    const result = parsePtnFile(commentedPtnFile.string);
    expect(result).to.deep.equal(commentedPtnFile.parsed);
  });
});
