// Some helper functions

module.exports.primesLessThan = function (n) {
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

    while (m < n) {
        if (isPrime(m)) {
            primes.push(m);
        }

        m += 2;
    }

    return primes;
};

// As a simple implementation of a multiset I use an object
// where the keys are the prime factors and the values are their power
module.exports.primeFactors = function (n) {
    let result = {};

    let p = 2;
    while (n !== 1) {
        while (n % p === 0) {
            n /= p;
            result[p] = result[p] ? result[p] + 1 : 1;
        }
        // It would be more efficient if p went to the next prime value
        p += 1;
    }

    return result;
};

// Return the union of two multisets
module.exports.union = function (m1, m2) {
    let m = m1;

    for (const key in m2) {
        if (m.hasOwnProperty(key)) {
            m[key] = Math.max(m[key], m2[key]);
        } else {
            m[key] = m2[key];
        }
    }

    return m;
};
