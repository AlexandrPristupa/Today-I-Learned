const dropElements = (arr, func) => {
    // Drop them elements.
    const outPutArr = [];
    let flag = false;
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i]) && flag === false) {
           flag = true; 
           outPutArr.push(arr[i]); 
        } else if(flag) {
          outPutArr.push(arr[i]); 
        }
    }
    
  return outPutArr;

};
  
dropElements([1, 2, 3], function(n) {return n < 3; });