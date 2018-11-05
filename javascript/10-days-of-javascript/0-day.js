const foo = (x) => {
    let a = x + 1;

    return () => {
        return a + 1;
    }
}

console.log(foo(10)());
