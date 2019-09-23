/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
export const addToArrayForm = function(A, K) {
    let firstNum = Number(A.join(''));
    let secondNum = firstNum + K;
    
    return secondNum.toString().split('');
};
