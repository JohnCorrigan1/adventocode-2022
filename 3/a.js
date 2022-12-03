const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

const split = [];

const priorites = [];

let count = 0;
for (let i = 97; i < 123; i++) {
  count++;
  let letter = String.fromCharCode(i);
  priorites.push({ letter, count });
}

for (let i = 65; i < 91; i++) {
  count++;
  let letter = String.fromCharCode(i);
  priorites.push({ letter, count });
}

input = input.split("\n");
input.forEach((element) => {
  element = element.replace("\r", "");
  split.push(element);
});

console.log(split);

let total = 0;
let found = [];

split.forEach((element) => {
  const container1 = element.slice(0, element.length / 2).split("");
  const container2 = element
    .slice(element.length / 2, element.length)
    .split("");
  container1.forEach((element) => {
    if (container2.includes(element) && !found.includes(element)) {
      priorites.forEach((priority) => {
        if (priority.letter === element) {
          found.push(element);
          total += priority.count;
        }
      });
    }
  });
  found = [];
});

//answer
console.log(total);
