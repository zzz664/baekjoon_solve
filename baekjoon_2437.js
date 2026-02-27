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
  if (lineCount === 2) {
    rl.close();
  }
}).on("close", function () {
  let weights = input[1].sort((a, b) => a - b);
  let sum = 1;
  for (let weight of weights) {
    if (sum < weight) break;
    sum += weight;
  }
  console.log(sum);
  process.exit();
});

// 무게가 양의 정수인 N개의 저울추가 주어질 때, 이 추들을 사용하여 측정할 수 없는 양의 정수 무게 중 최솟값을 구하는 프로그램을 작성하시오.

// 예를 들어, 무게가 각각 3, 1, 6, 2, 7, 30, 1인 7개의 저울추가 주어졌을 때, 이 추들로 측정할 수 없는 양의 정수 무게 중 최솟값은 21이다.
