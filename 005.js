let misc = require("./misc");

// Build the factors multiset for the answer
let answerFactors = {};
for (let i = 1; i <= 20; i++) {
    answerFactors = misc.union(answerFactors, misc.primeFactors(i));
}

// Multiply all factors to get the answer
let answer = 1;
for (const key in answerFactors) {
    answer *= key ** answerFactors[key];
}

console.log(answer);
