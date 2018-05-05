import { variableName } from './../../javascript/codefight/variableName'

describe("testing variableName", () => {

  it('correct variable name. should be return true', () => {
    expect(variableName("var_1__Int")).toEqual(true);
  });

  it('correct variable name. should be return false', () => {
    expect(variableName("qq-q")).toEqual(false);
  });

  it('correct variable name. should be return false', () => {
    expect(variableName("2w2")).toEqual(false);
  });

});