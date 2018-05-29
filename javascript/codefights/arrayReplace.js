export const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
    let outPut = [];
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            outPut.push(substitutionElem);
        } else {
            outPut.push(inputArray[i]);
        }
    }
    
    return outPut;
};
