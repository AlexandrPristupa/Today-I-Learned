export const avoidObstacles = (inputArray) => {
  const arr = inputArray.sort((a, b) => {
    return a - b;
  });

  for (let i = 1; i < arr[arr.length - 1] + 1; i++) {
    if(arr.every((item) => {
        return item % i !== 0;
    })) {
        return i;
    }
  }
};
