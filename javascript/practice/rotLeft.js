export const rotLeft = (a, d) => {
    for (let i = 0; i < d; i++) {
        console.log(a.push(a.shift()));
    }

    return a;
}
