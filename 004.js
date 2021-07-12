// I don't really like problems that depend on the decimal representation of numbers...

"use strict";

function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }

    return true;
}

let largestPalindrome = 0;

for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
        const number = i * j;
        if (isPalindrome(String(number))) {
            largestPalindrome =
                largestPalindrome < number ? number : largestPalindrome;
        }
    }
}

console.log(largestPalindrome);
