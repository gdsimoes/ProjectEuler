// There is a closed formula for this one.

// return the sum of squares from 1 to n
function sumOfSquares(n) {
    return (n * (2 * n + 1) * (n + 1)) / 6;
}

// return the square of the sum from 1 to n
function squareOfSum(n) {
    return ((n * (n + 1)) / 2) ** 2;
}

console.log(squareOfSum(100) - sumOfSquares(100));
