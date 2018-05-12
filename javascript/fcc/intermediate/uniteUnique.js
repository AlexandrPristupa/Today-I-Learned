function uniteUnique(arr) {
    var arrArguments = [];
    var outPutArr = [];
    var num = 0;
  
    for(var prop in arguments) {
        arrArguments.push(arguments[prop]);
    }
  
    var flattened = arrArguments.reduce((accumulator, currentValue) => {
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
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);