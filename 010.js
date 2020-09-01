let misc = require("./misc");

console.log(misc.primesLessThan(2_000_000).reduce((x, y) => x + y));
