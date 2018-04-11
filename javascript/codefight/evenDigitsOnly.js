export const evenDigitsOnly = (n) => {
    let str = n + '';
    let arrStr = str.split('');
    
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] % 2 > 0) {
            return false;
        }
    }
    
    return true;
    
}
