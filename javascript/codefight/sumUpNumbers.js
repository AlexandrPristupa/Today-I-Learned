export const sumUpNumbers = (inputString) => {
    const strArr = inputString.split(' ');
    let outPutNum = 0;

    for(let i = 0; i < strArr.length; i++) {
        if(Number.isInteger(parseInt(strArr[i])) === true) {
            outPutNum += parseInt(strArr[i]);
        }
    }

    return outPutNum;

};
