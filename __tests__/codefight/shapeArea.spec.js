import { shapeArea } from './../../javascript/codefight/shapeArea'

describe("Testing shapeArea", () => {
  it('should be return n-interesting polygon', () => {
    expect(shapeArea(2)).toEqual(5);
    expect(shapeArea(3)).toEqual(13);
    expect(shapeArea(5)).toEqual(41);
  });
});
