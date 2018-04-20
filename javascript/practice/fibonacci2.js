export const fibonacci2 = (num) => {
    let fibonacciArr = [0, 1];

    for (let i = 1; fibonacciArr.length < num; i++) {
        fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i - 1]);
    }

    return fibonacciArr;
};