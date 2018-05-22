export const reverseParentheses = (str) => (
    str.includes('(') ? reverseParentheses(reverseOnce(str)) : str
);

const reverseOnce = (str) => {
    const regexp = /\(([^()]*)\)/i;
    let subStr = regexp.exec(str)[1];
    subStr = subStr.split('').reverse().join('');

    return str.replace(regexp, subStr);
};
