// You are given a two-digit integer n. Return the sum of its digits.

export const addTwoDigits = (n) => {
    let str = n + '';
    let strArr = str.split('');
    return parseInt(strArr[0]) + parseInt(strArr[1]);
};
