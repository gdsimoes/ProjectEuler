// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

"use strict";

function nthPrime(n) {
    let primes = [2];

    function isPrime(m) {
        for (const p of primes) {
            if (m % p == 0) {
                return false;
            }
        }

        return true;
    }

    let m = 3;

    while (primes.length < n) {
        if (isPrime(m)) {
            primes.push(m);
        }

        m += 2;
    }

    return primes[primes.length - 1];
}

console.log(nthPrime(10001));
