const start = new Date(1901, 0, 1);
const end = new Date(2000, 11, 31);

let answer = 0;
for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    if (d.getDay() === 0 && d.getDate() === 1) {
        answer++;
    }
}

console.log(answer);
