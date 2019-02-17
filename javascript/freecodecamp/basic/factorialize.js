export const factorialize = (num) => {

    if (num === 1 || !num) {
        return 1;
    } else {
       return num * factorialize(num - 1);
    }
};
