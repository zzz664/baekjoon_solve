const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
lineCount = 0;

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));
  lineCount++;
  if (lineCount === input[0][0] + 1) {
    rl.close();
  }
}).on("close", function () {
  const testCases = input.slice(1);
  for (let testCase of testCases) {
    const [x1, y1, r1, x2, y2, r2] = testCase;
    if (x1 === x2 && y1 === y2 && r1 === r2) {
      console.log(-1);
      continue;
    }

    const maxDist = Math.pow(r1 + r2, 2);
    const minDist = Math.pow(r2 - r1, 2);
    const hypot = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);

    if (hypot > maxDist || hypot < minDist) {
      console.log(0);
    } else if (hypot === minDist || hypot === maxDist) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
  process.exit();
});
