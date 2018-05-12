function sumAll(arr) {
    var allNumbersArr = [];
    var num = 0;
    var len = 0;
    var index = 0;
    
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
}

sumAll([1, 4]);