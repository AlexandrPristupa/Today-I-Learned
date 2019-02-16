export const sortByHeight = (a) => {
    let flag, 
        len = a.length, 
        arr = [],
        indexVal = 0;

    for (let i = 0; i < len; i++) {
        if (a[i] !== -1) {
            arr[arr.length] = a[i];
        }
    }

    do {
        flag = false;
        for (var i = 0; i < arr.length-1; i++) {

                if (arr[i] > arr[i+1]) {
                    var temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    flag = true;
                }
                 
        }

    } while (flag);

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = arr[indexVal];
            indexVal++
        }
    }

    return a;
};
