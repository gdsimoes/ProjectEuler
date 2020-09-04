// Some helper functions

// Return array with primes less than n
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

// Return the number of elements of multisets
module.exports.numberOfElements = function (mset) {
    let result = 0;
    for (const key in mset) {
        result += mset[key];
    }

    return result;
};

// Return an array with all the factors of n
module.exports.allFactors = function (n) {
    const primeFactors = module.exports.primeFactors(n);

    function helper(number, mset) {
        // base case
        if (Object.keys(mset).length === 0) {
            return [number];
        }

        const key = Object.keys(mset)[0];
        const value = mset[key];

        let newmset = {};
        Object.assign(newmset, mset);
        delete newmset[key];

        let factors = [];

        for (let i = 0; i <= value; i++) {
            factors.push(...helper(number * key ** i, newmset));
        }

        return factors;
    }

    return helper(1, primeFactors);
};
