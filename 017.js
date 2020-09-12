/*
    I don't consider this type of problem to be real Mathematics, but it is a decent programming problem.
*/

// Return the number of letters used when n is written in words.
// 1 <= n <= 1000
function howManyLetters(n) {
    if (n === 1000) {
        return 11;
    }

    let result = 0;

    if (n >= 100) {
        switch ((n - (n % 100)) / 100) {
            case 1:
            case 2:
            case 6:
                result += 10;
                break;

            case 4:
            case 5:
            case 9:
                result += 11;
                break;

            case 3:
            case 7:
            case 8:
                result += 12;
                break;

            default:
                break;
        }
        n = n % 100;

        // This is needed to account for the 'and'
        if (n === 0) {
            return result;
        } else {
            result += 3;
        }
    }

    if (n >= 20) {
        switch ((n - (n % 10)) / 10) {
            case 2:
            case 3:
            case 8:
            case 9:
                result += 6;
                break;
            case 4:
            case 5:
            case 6:
                result += 5;
                break;
            case 7:
                result += 7;
                break;

            default:
                break;
        }

        n = n % 10;
    }

    switch (n) {
        case 1:
        case 2:
        case 6:
        case 10:
            result += 3;
            break;

        case 4:
        case 5:
        case 9:
            result += 4;
            break;

        case 3:
        case 7:
        case 8:
            result += 5;
            break;

        case 11:
        case 12:
            result += 6;
            break;

        case 15:
        case 16:
            result += 7;
            break;

        case 13:
        case 14:
        case 19:
        case 18:
            result += 8;
            break;

        case 17:
            result += 9;
            break;

        default:
            break;
    }

    return result;
}

let answer = 0;
for (let n = 1; n <= 1000; n++) {
    answer += howManyLetters(n);
}

console.log(answer);
