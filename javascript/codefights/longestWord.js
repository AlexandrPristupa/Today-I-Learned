export const longestWord = (text) => {
    const strArr = text.split(/\s+/g);

    if(strArr.length === 1) {
        return text;
    }

    let word = '';
    let wordLength = 0;

    for(let i = 0; i < strArr.length; i++) {

        let curentWord = '';

        if(strArr[i][strArr[i].length - 1] === ',') {
            curentWord = strArr[i].substring(0, strArr[i].length - 1);
        }


        if(/^[a-zA-Z]+$/.test(curentWord)) {

            if(curentWord.length > wordLength) {

                word = curentWord;
                wordLength = curentWord.length;
                curentWord = '';
            }

        }
    }

    return word;

};

// longestWord("Ready, steady, go!"); return 'steady'
