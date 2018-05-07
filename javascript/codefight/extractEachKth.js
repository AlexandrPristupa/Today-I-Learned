export const extractEachKth = (inputArray, k) => {
    let outPut = [];

    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k !== 0) {
            outPut.push(inputArray[i])
        }
    }

    return outPut;

};
