import { validTime } from '../../javascript/codesignal/validTime'

describe("testing validTime", () => {

  it('should be return true', () => {
    expect(validTime("13:58")).toEqual(true);
  });

  it('should be return false', () => {
    expect(validTime("25:51")).toEqual(false);
  });

});
