// for practice

export const findArrow = (string) => {

    if (!string) {
        return 0;
    }

    let newStr = string.split('');
    let arrowLeft = false;
    let arrowRight = false;

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === '<') {
            arrowLeft = true;
        } else if (newStr[i] === '>') {
            arrowRight = true;
        }
    }

    if (arrowLeft && arrowRight) {
        return 1;
    } else {
        return 0;
    }

};
