function firstDuplicate(a) {

    let num = 0;
    let duplicateArr = [];

    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
            if(a[i] === a[j]) {
                if(num === 0) {
                    num = j;
                } else {
                    duplicateArr.push(j);
                }
            }
        }
    }

    return duplicateArr;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
