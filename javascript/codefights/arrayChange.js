export const arrayChange = (inputArray) => {
  let moves = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      let diff = inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] += diff;
      moves += diff;
    }
  }

  return moves;
};
