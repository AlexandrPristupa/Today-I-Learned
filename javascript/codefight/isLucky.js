export const isLucky = (n) => {
    let str = n + '';
    let strArr = str.split('');
    let half =  strArr.length / 2;
    let letftNum = 0;
    let rightNum = 0;
    
    for (let i = 0; i < strArr.length; i++) {
        if (i < half) {
            letftNum += parseInt(strArr[i]);
        } else {
            rightNum += parseInt(strArr[i]);
        }
    }
    
    if (letftNum === rightNum) {
        return true
    } 
    
    return false;
}