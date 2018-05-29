export const firstDigit = (inputString) => {
    let res = inputString.match(/[0-9]/);
    return res[0];
};
