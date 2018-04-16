export const sortByHeight = (a) => {

    var flag, len = a.length;
    do {
        flag = false;
        for (var i = 0; i < a.length-1; i++) {
            if (a[i] < 0) {
                continue;
            } else if (a[i] > 0) {

                if (a[i + 1] < 0) {
                    continue;
                }

                if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    flag = true;
                }
                
            }
        }

    } while (flag);

    return a;
}

