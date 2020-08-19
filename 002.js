// I wanted to use a helper function because I believe this solution is very intuitive
function fib(n) {
    // This array starts with [fib(0), fib(1)]
    let results = [1, 1];

    function helper(n) {
        if (n < results.length) {
            return results[n];
        } else {
            results[n] = helper(n - 1) + helper(n - 2);
            return results[n];
        }
    }

    return helper(n);
}

// Now we actually sum all the required terms
let sum = 0;
let currentFib = 0;
for (let n = 1; currentFib <= 4_000_000; n++) {
    currentFib = fib(n);

    if (currentFib % 2 === 0) {
        sum += currentFib;
    }
}

console.log(sum);
