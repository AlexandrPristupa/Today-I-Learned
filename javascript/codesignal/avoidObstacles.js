export const avoidObstacles = (inputArray) => {
  let sum = 1;

  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] % sum === 0) {
      i = -1;
      sum++;
    }
  }
  return sum;
};
