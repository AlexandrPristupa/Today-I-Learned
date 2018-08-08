import { avoidObstacles } from '../../javascript/codefights/avoidObstacles';

describe('testing avoidObstacles', () => {

  it('Find the minimal length of the jump enough to avoid all the obstacles.', () => {
    expect(avoidObstacles([5, 3, 6, 7, 9])).toEqual(4);
  });

  it('Find the minimal length of the jump enough to avoid all the obstacles.', () => {
    expect(avoidObstacles([1, 4, 10, 6, 2])).toEqual(7);
  });

});
