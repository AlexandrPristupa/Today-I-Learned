export const largestOfFour = (arr) => {
  let outPutArr = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i][0];
    
    for (let j = 1; j < arr[i].length; j++) {
        
        if (arr[i][j] > num) {
          num = arr[i][j];
        }

    }

    outPutArr[i] = num
  }

  return outPutArr;
}
