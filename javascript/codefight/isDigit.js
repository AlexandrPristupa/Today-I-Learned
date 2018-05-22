export const isDigit = (symbol) => {

    if(typeof +symbol === "number" && isNaN(+symbol + 1) === false) {
        return true
    }

    return false
};
