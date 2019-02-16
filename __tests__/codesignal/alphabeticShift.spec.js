import { alphabeticShift } from '../../javascript/codesignal/alphabeticShift'

describe('testing alphabeticShift', () => {

  it('should be return "dsbaz"', () => {
    expect(alphabeticShift("crazy")).toEqual("dsbaz")
  });

  it('should be return "a"', () => {
    expect(alphabeticShift("z")).toEqual("a")
  });

  it('should be return "bbbbcccdde"', () => {
    expect(alphabeticShift("aaaabbbccd")).toEqual("bbbbcccdde")
  });

});
