/**
 * @param {string} s
 * @return {string}
 */
export const reverseString = (s) => {
    let outStr = "";
    
    for(let i = s.length - 1; i >= 0; i--) {
        outStr += s[i];
    }
    
    return outStr;
};
