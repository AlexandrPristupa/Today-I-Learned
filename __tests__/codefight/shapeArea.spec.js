import { shapeArea } from '../../javascript/codefights/shapeArea'

describe("testing shapeArea", () => {
  
  it('should be return n-interesting polygon', () => {
    expect(shapeArea(2)).toEqual(5);
  });

  it('should be return n-interesting polygon', () => {
    expect(shapeArea(3)).toEqual(13);
  });

  it('should be return n-interesting polygon', () => {
    expect(shapeArea(5)).toEqual(41);
  });

});
