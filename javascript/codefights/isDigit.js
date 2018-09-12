export const isDigit = (symbol) => typeof +symbol === "number" && isNaN(+symbol + 1) === false ;
