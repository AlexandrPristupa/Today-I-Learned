export const arrayMaximalAdjacentDifference = (inputArray) => {
    let outPut = [];
    let absolute = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if(!inputArray[i + 1]) {
            break;
        }
        outPut.push(Math.abs(inputArray[i] - inputArray[i + 1]));
    }

    for(let i = 0; i < outPut.length; i++) {
        if(outPut[i] < outPut[i + 1]) {
            absolute = outPut[i + 1];
        }
    }

    return absolute;
};
