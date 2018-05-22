const sumPrimes = (num) => {
    let res = 0;
    
      function getPrimes(max) {
        const sieve = [];
        const primes = [];

        for (let i = 2; i <= max; ++i) {
          if (!sieve[i]) {
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
              sieve[j] = true;
            }
          }
        }
    
        return primes;
      }
    
      const primes = getPrimes(num);
      for (let p = 0; p < primes.length; p++) {
        res += primes[p];
      }
    
    return res;
};
