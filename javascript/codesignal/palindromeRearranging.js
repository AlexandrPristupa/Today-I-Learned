export const palindromeRearranging = (inputString) => {
    const arr = inputString.split('');
    const lettersObj = {};
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(!lettersObj.hasOwnProperty(arr[i])) {
            lettersObj[arr[i]] = 1;
        } else {
            lettersObj[arr[i]]++;
        }
    }

    for(let i in lettersObj) {
        if(lettersObj[i] % 2 !== 0 ) {
            count++;
        }
    }

    if(count > 1) {
        return false;
    }

    return true;


};

// palindromeRearranging("aabb"); true
// palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"); false
// palindromeRearranging("abbcabb"); true