const sumAll = (arr) => {
    const allNumbersArr = [];
    let num = 0;
    let len = 0;
    let index = 0;
    
    if(arr[0] > arr[1]) {
      index = arr[1];
      len = arr[0];
    } else {
      index = arr[0];
      len = arr[1];
    }
    
    for(let i = index; i <= len; i++) {
       allNumbersArr.push(i);
    }
    
    for(let i = 0; i < allNumbersArr.length; i++) {
      num += allNumbersArr[i];
    }
    
    return num;
};

sumAll([1, 4]);
