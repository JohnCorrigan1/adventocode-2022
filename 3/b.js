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

for(let i = 2; i < split.length; i += 3){
    const check = split[i].split("");
    const check2 = split[i-1].split("")
    const check3 = split[i-2].split("")
    check.forEach((element) => {
        if(check2.includes(element) && check3.includes(element) && !found.includes(element)){
            priorites.forEach((priority) => {
                if (priority.letter === element) {
                    found.push(element);
                    total += priority.count;
                }
            });
        }
    });
    found = [];
}
    //answer
console.log(total);
