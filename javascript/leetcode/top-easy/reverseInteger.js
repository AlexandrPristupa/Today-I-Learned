/**
 * @param {number} x
 * @return {number}
 */
export const reverseInteger = (x) => {
    let str = x + '';
    let revStr = '';
    let num = 0;

    if (str === '0') {
        return 0;
    }

    for (let i = str.length - 1; i >= 0; i--) {
        if(str[0] === '-' && revStr === '') {
            if (str[i] === '-') {
                break;
            }

            if (revStr === '') {
                revStr += '-' + str[i];          
            } else {
                revStr += str[i] + '';
            }
                
        } else if (str[str.length - 1] === '0' && revStr === '') {
            if (str[i] === '0') {
                revStr += '';
            } else {
                revStr += str[i] + '';
            }     
        } else {
            revStr += str[i] + '';
        } 
    }

    num = parseInt(revStr);
    
    if (num > 2147483647 || num < -2147483647) {
        return 0;
    }
    
    return num;
};
