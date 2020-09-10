// The answer is the binomial coefficient '20 choose 10'.
// Since the factorial of 20 is too large to use the usual formula for
// the binomial coefficient we would need to use BigInts.
// The following function is an implementation that avoids that.

function binomialCoefficient(n, k) {
    if (k < 0 || k > n) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else {
        return (
            binomialCoefficient(n - 1, k) + binomialCoefficient(n - 1, k - 1)
        );
    }
}

// this function is not needed for this problem
// print the pascal triangle (without formatting) up to level maxN
function pascal(maxN) {
    let line = "";
    for (let n = 0; n <= maxN; n++) {
        for (let k = 0; k <= n; k++) {
            line += `${binomialCoefficient(n, k)} `;
        }

        console.log(line);
        line = "";
    }
}

console.log(binomialCoefficient(20, 10));
