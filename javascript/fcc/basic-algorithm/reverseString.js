export const reverseString1 = (str) => {
    let outPutStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        outPutStr += str[i];
    }

    return outPutStr;
}

export const reverseString2 = (str) => {
    return str.split('').reverse().join('');
}
