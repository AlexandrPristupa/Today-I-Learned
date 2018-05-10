export const reverseParentheses = (str) => {
    if (str.includes('(')) {
        return reverseParentheses(reverseOnce(str));
    } else {
        return str;
    }
};

const reverseOnce = (str) => {
    let regexp = /\(([^()]*)\)/i;
    let subStr = regexp.exec(str)[1];
    subStr = subStr.split('').reverse().join('');
    console.log(subStr);
    return str.replace(regexp, subStr);
};
