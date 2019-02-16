import { findEmailDomain } from '../../javascript/codesignal/findEmailDomain';

describe('Given array of integers, remove each kth element from it.', () => {

  it('should be return [1, 2, 4, 5, 7, 8, 10]', () => {
    expect(findEmailDomain("prettyandsimple@example.com")).toEqual("example.com");
  });

  it('should be return []', () => {
    expect(findEmailDomain("<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org")).toEqual("example.org");
  });

  it('should be return [1, 1, 1, 1]', () => {
    expect(findEmailDomain("someaddress@yandex.ru")).toEqual("yandex.ru");
  });

});
