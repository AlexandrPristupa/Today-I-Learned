export const evenDigitsOnly = (n) => {
    let str = n + '';
    let arrStr = str.split('');
    
    for (let item of arrStr) {
        if (item % 2 > 0) {
            return false;
        }
    }
    
    return true;
    
};
