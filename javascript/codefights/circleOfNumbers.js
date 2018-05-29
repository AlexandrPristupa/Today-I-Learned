export const circleOfNumbers = (n, firstNumber) => {

    let arr = [];

    for(let i = 0; i < n; i++) {
        arr.push(i);
    }

    let num = arr.length / 2;

    if (firstNumber + num >= arr.length) {
        return firstNumber + num - arr.length
    }

    return arr[firstNumber + num];

};
