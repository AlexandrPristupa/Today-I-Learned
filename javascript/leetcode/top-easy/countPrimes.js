/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {

  const primesArr = [];

  nextPrime: for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue nextPrime;
      }
    }
    primesArr.push(i);
  }

  return primesArr.length;

};
