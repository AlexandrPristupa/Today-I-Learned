// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

export const adjacentElementsProduct = (inputArray) => {
    let res = 0;
    let tmp = inputArray[0] * inputArray[1];

    for(let i = 1; i < inputArray.length; i++) {
            res = inputArray[i] * inputArray[i + 1];
            (res > tmp) ? tmp = res : res;
        }

    return tmp;
}
