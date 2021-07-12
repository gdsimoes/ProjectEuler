// This is another one of these problems that seems highly artificial to me. Who cares about amicable numbers?

"use strict";

let misc = require("./misc");

// Return true if a and b are amicable and false otherwise. If only a is given return amicable(a, sumA)
function amicable(a, b) {
    let properDivisorsOfA = misc.allFactors(a);
    properDivisorsOfA.pop();
    const sumA = properDivisorsOfA.reduce((x, y) => x + y, 0);

    // You can't be friends with yourself!
    if (a === b) {
        return false;
        // b exists?
    } else if (b === undefined) {
        return amicable(a, sumA);
    }

    let properDivisorsOfB = misc.allFactors(b);
    properDivisorsOfB.pop();
    const sumB = properDivisorsOfB.reduce((x, y) => x + y, 0);

    return sumA === b && sumB === a;
}

let answer = 0;
for (let i = 2; i < 10000; i++) {
    if (amicable(i)) {
        answer += i;
    }
}

console.log(answer);
