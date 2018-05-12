/**
 * @param {number} n
 * @return {string[]}
 */
export const fizzBuzz = (n) => {

    if(n === 1) {
        return ['1'];
    }

    let arr = [];

    for(let i = 1; i <= n; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            arr.push('FizzBuzz');
        } else if(i % 5 === 0) {
            arr.push('Buzz');
        } else if(i % 3 === 0) {
            arr.push('Fizz');
        } else {
            arr.push(i + '');
        }
    }

    return arr;

};
