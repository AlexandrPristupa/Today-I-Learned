export const shapeArea = (n) => {
    let size = n * 2 - 1;
    let res = 0;
    let i = 1;

    while (i < size) {
        res += i;
        i += 2;
    }

    res *= 2;
    res +=size;
    return res;
}
