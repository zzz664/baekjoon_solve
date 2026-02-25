const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let lineCount = 0;

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
  lineCount++;
  if (lineCount === parseInt(input[0][0]) + 1) {
    rl.close();
  }
}).on("close", function () {
  input = input.slice(1);
  input.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else if (a[1] === b[1]) return a[0] - b[0];
  });
  console.log(input.join("\n").replace(/,/g, " "));
  process.exit();
});
