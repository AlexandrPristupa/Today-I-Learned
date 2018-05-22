export const alphabeticShift = (inputString) => {
    let arr = inputString.split('');
    let outPut = [];
    let normal = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cipher = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
    
    for (let item of arr) {
        for (let j = 0; j < normal.length; j++) {
            if (item === normal[j]) {
                outPut.push(cipher[j]);
            }
        }
    }
    
    return outPut.join('');
};
