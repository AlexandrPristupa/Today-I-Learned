export const addTogether = () => {

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
};
