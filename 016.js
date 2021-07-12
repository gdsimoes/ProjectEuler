// I dislike problems that depend on the decimal representation of numbers
// because I consider them artificial. So I decided to use BigInts and make
// this problem trivial

"use strict";

let bigNumber = 2n ** 1000n;

let result = 0n;
while (bigNumber !== 0n) {
    result += bigNumber % 10n;
    bigNumber /= 10n;
}

console.log(result);
