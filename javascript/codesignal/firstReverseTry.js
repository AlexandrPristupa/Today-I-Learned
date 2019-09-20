export const firstReverseTry = (arr) => {
  const len = arr.length;

  if (!len) {
    return arr;
  }

  const first = arr[0];
  const last = arr[len - 1];

  arr[0] = last;
  arr[len - 1] = first;

  return arr;
}
