function steamrollArray(arr) {
    // I'm a steamroller, baby
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
    }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
