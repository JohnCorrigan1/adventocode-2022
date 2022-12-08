const fs = require("fs");

let input = fs.readFileSync("example.txt", "utf8");

const split = [];

input = input.split("\n");
input.forEach((element) => {
  element = element.replace("\r", "");
  split.push(element);
  // console.log("element", element)
});

// console.log(split)

const path = [];
const dirs = [];
let size = 0;
let currentDirs = [];
let currentTotal = 0;
let dirSizes = 0;

split.forEach((element) => {
  const current = element.split(" ");

  if (current[0] === "$") {
    if (current[1] === "cd") {
      if (current[2] === "..") {
        path.pop();
      } else {
        dirs.forEach((dir) => {
          if (dir[0] === path[path.length - 1]) {
            dir.push(current[2]);
          }
        });
        path.push(current[2]);
      }
      // console.log(dirs)
    } else if (current[1] === "ls") {
      dirs.push([path[path.length - 1]]);
    }
    // console.log("dirs",dirs)
  } else if (current[0] !== "dir") {
    dirs.forEach((dir) => {
      if (dir[0] === path[path.length - 1]) {
        dir.push(current[0]);
      }
      // console.log(dirs)
    });
  }

  // console.log(path)
});
console.log(dirs);
