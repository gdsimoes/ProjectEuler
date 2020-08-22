// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let number = 600851475143;

let factors = [];

let n = 2;

const root = Math.sqrt(number);

while (n <= root) {
    if (number % n == 0) {
        number /= n;
        factors.push(n);
    } else {
        n++;
    }
}

console.log(factors[factors.length - 1]);
