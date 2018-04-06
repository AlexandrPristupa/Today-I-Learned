export const longestStrings = (inputArray) => {

  if(!inputArray.length || !inputArray) {
    return [];
  }

  if (inputArray.length === 1) {
    return inputArray;
  }
  let stringLength = 0;
  let outPutArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    if(inputArray[i].length > stringLength) {
      stringLength = inputArray[i].length;
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === stringLength) {
      outPutArr[outPutArr.length] = inputArray[i];
    }
  }

  return outPutArr;
}
