// Given an integer n, return the largest number that contains exactly n digits.

export const largestNumber = (n) => {
    let outPut = '';

    for (let i = 0; i < n; i++) {
        outPut += 9;
    }

    return +outPut;
};
