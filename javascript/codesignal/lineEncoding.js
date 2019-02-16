
//requires revision

const lineEncoding = (s) => {

    const arr = [];
    let outPutStr = '';
    let item = '';
    let str = '';

    for(let i = 0; i < s.length; i++) {
        if(item === '' && str === '') {

            item = s[i];

            if(s[i] === s[i + 1]) {
                str += s[i];
            }

        } else {
            if(item === s[i]) {
                str += s[i];
            } else if(item !== s[i]) {
                outPutStr += str.length + item;

                item = s[i];
                str = s[i];

            }
        }
    }

    return outPutStr;

};

lineEncoding('aabbbc');
