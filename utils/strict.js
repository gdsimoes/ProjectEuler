// This small script add "use strict" to all JavaScript files in a given folder

"use strict";

const fs = require("fs");

// List of all JavaScript files in directory
const fileList = fs.readdirSync("..").filter((x) => x.endsWith(".js"));

for (const filename of fileList) {
    addStrict(`../${filename}`);
}

// Add "use strict" to the 'filename' file
function addStrict(filename) {
    const lines = fs.readFileSync(filename).toString().split("\n");

    const index = firstLine(lines);

    const directive = '"use strict";';
    if (lines[index] !== directive) {
        lines.splice(index, 0, directive + "\n");
    }

    const contents = lines.join("\n");
    fs.writeFileSync(filename, contents);
}

// Return the index of the first line in 'lines' which is neither empty nor a single-line comment
function firstLine(lines) {
    for (const i in lines) {
        if (lines[i] !== "" && !lines[i].startsWith("//")) {
            return i;
        }
    }
}
