const uniteUnique = (arr) => {
    const arrArguments = [];
    const outPutArr = [];
    let num = 0;
  
    for(let prop in arguments) {
        arrArguments.push(arguments[prop]);
    }
  
    const flattened = arrArguments.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    }, []);
 

    for(let i = 0; i < flattened.length; i++) {

        if(i === 0) {
            num = flattened[i];
            outPutArr.push(flattened[i]);
        } else {
            if(flattened[i] !== num) {
                num = flattened[i];
                outPutArr.push(flattened[i]);
            } 
        }
    }
  
    return flattened;
};
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);