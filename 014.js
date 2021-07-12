"use strict";

function collatz(n) {
    if (n % 2 == 0) {
        return n / 2;
    } else {
        return 3 * n + 1;
    }
}

function lengthOfCollatz(n) {
    let length = 1;

    while (n !== 1) {
        n = collatz(n);
        length++;
    }

    return length;
}

// Find which starting number, under one million, produces the longest chain.
let maxLength = 1;
let result = 1;
for (let i = 1; i < 1_000_000; i++) {
    const length = lengthOfCollatz(i);
    if (length > maxLength) {
        maxLength = length;
        result = i;
    }
}

console.log(result);
