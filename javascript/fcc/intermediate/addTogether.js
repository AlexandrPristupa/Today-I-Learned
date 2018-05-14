function addTogether() {

    if(typeof arguments[0] === 'string') {
        return;
    }

    if(arguments.length > 1) {

        let sum = 0;

        for(let i = 0; i < arguments.length; i++) {
            if(typeof arguments[i] === 'number') {
                sum += arguments[i];
            } else if(typeof arguments[i] === 'string') {
                return;
            }
        }

        return sum;
    } else {

        let n = arguments[0];

        return function (num) {
            if(typeof num === 'number') {
                return n + num;
            }
        };
    }
}

addTogether(2, 3); // 5
addTogether(2)(3); // 5
addTogether("http://bit.ly/IqT6zt"); // undefined
addTogether(2, "3"); // undefined.
addTogether(2)([3]); // undefined
