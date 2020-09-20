function factorial(n) {
    let answer = 1n;
    for (let i = 1n; i <= n; i++) {
        answer *= i;
    }
    return answer;
}

// Add all digits for the BigInt n
function addAllDigits(n) {
    let answer = 0n;
    while (n !== 0n) {
        answer += n % 10n;
        n = (n - (n % 10n)) / 10n;
    }
    return answer;
}

console.log(addAllDigits(factorial(100)));
