export const candies = (n, m) => {

    if(m % n === 0) {
        return m;
    } else if(n > m) {
        return 0;
    } else if(m % n > 0) {
        return m - (m % n);
    }

};
