export const alphabeticShift = (inputString) => {
    let arr = inputString.split('');
    let outPut = [];
    let normal = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cipher = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < normal.length; j++) {
            if (arr[i] === normal[j]) {
                outPut.push(cipher[j]);
            }
        }
    }
    
    return outPut.join('');
};
