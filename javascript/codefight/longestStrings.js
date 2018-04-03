export const longestStrings = (inputArray) => {

  if (inputArray.length === 1) {
    return inputArray;
  }

  let outPutArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (!inputArray[i + 1]) {
      continue;
    }
    if (inputArray[i].length >= inputArray[i + 1].length) {
      outPutArr.push(inputArray[i]);
    }
  }
  console.log(outPutArr);
  return outPutArr;
}
