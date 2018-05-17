export const firstDuplicate = (a) => {

    let num = 0;
    let index = 0;

    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
            if(a[i] === a[j]) {
                if(num === 0) {
                    num = a[j];
                    index = j;
                } else if(index > j) {
                    num = a[j];
                    index = j;
                }
            }
        }
    }

    if(!num && !index) {
        return -1;
    }

    return num;
}
