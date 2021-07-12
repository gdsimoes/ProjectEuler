// value of a + b + c
"use strict";

const sum = 1000;

// since a < b < c 1000/3 is an upper bound for a
const supA = sum / 3;

// I decided to use a label just to try it
label: for (let a = 1; a < supA; a++) {
    // since c = sum - (a + b) and b < c we also get an upper bound for b
    const supB = (sum - a) / 2;

    for (let b = a + 1; b < supB; b++) {
        const c = sum - (a + b);
        if (a ** 2 + b ** 2 === c ** 2) {
            console.log(a * b * c);
            break label;
        }
    }
}
