import { chessBoardCellColor } from '../../javascript/codefights/chessBoardCellColor';

describe('testing chessBoardCellColor', () => {
  
  it('should be return true', () => {
    expect(chessBoardCellColor("A1", "C3")).toEqual(true);
  });

  it('should be return false', () => {
    expect(chessBoardCellColor("A1", "H3")).toEqual(false);
  });

});