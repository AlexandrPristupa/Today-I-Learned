/*
  You are given an n x n 2D matrix that
  represents an image. Rotate the image
  by 90 degrees (clockwise).
*/

/**
 * @param {number[]} a
 * @return {number[]}
 */

export const rotateImage = (a) => {
  let current, next;

  for (let j = 0; j < a.length / 2; j++) {
    for (let i = j; i < a.length - 1 - j; i++) {
      next = a[i][a.length - 1 - j];
      a[i][a.length - 1 - j] = a[j][i];
      current = next;

      next = a[a.length - 1 - j][a.length - 1 - i];
      a[a.length - 1 - j][a.length - 1 - i] = current;
      current = next;

      next = a[a.length - 1 - i][j];
      a[a.length - 1 - i][j] = current;
      current = next;

      next = a[j][i];
      a[j][i] = current;
      current = next;
    }
  }

  return a;

};
