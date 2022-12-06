const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

const split = [];

input = input.split("\n");
input.forEach((element) => {
  element = element.replace("\r", "");
  split.push(element);
});

const howMany = Math.floor(split[0].length / 4) + 1;
const twod = [];
const instructions = [];
for (let i = 0; i < howMany; i++) {
  twod.push([(i + 1).toString(), []]);
}

for (let i = 0; i < split.length; i++) {
  const dat = split[i].split("");
  if (!dat.includes("m")) {
    for (let j = 0; j < dat.length; j++) {
      if (/[A-Z]/.test(dat[j])) {
        twod[Math.floor(j / 4)][1].push(dat[j]);
      }
    }
  } else {
    instructions.push(split[i]);
  }
}
let tempArray = [];
const execute = (twod, instructions) => {
  instructions.forEach((element) => {
    const line = element.split(" ");
    const howMany = parseInt(line[1]);
    const from = line[3];
    const to = line[5];
    tempArray = [];
    twod.forEach((element1) => {
      if (element1[0] === from) {
        for (let i = 0; i < howMany; i++) {
          let temp = element1[1].shift();
          tempArray.push(temp);
        }
        twod.forEach((element2) => {
          if (element2[0] === to) {
            for (let i = tempArray.length; i > 0; i--) {
              element2[1].unshift(tempArray[i - 1]);
            }
          }
        });
      }
    });
  });
};

execute(twod, instructions);

console.log(twod);
