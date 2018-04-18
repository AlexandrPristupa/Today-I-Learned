export const findLongestWord = (str) => {
    let longest = 0, strArr = str.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longest) {
            longest = strArr[i].length;
        }
    }

    return longest;
};
