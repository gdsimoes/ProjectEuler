// Probably the most efficient solution
let sum = 0;

for (let n = 1; n < 1000; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
        sum += n;
    }
}

console.log(sum);

// Functional programming solution
console.log(
    [...Array(1000).keys()]
        .filter((n) => n % 3 === 0 || n % 5 === 0)
        .reduce((a, b) => a + b)
);
