"use strict";

let misc = require("./misc");

// return the nth triangle number
function nthTriangleNumber(n) {
    return (n * (n + 1)) / 2;
}

// return the first triangle number to have over five hundred divisors
let n;
for (n = 1; misc.allFactors(nthTriangleNumber(n)).length <= 500; n++);

console.log(nthTriangleNumber(n));
