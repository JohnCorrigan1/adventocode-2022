const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

const split = [];

input = input.split("\n");
input.forEach((element) => {
  element = element.replace("\r", "");
  split.push(element.split(""));
  // console.log("element", element)
});

console.log(split)

let totalTrees = 0;
let isVisible = false;
const treesSeen = [];
let isEdge = false;
let current = 0;

for(let i = 0; i < split.length; i++){
    for(let j = 0; j < split[i].length; j++){
        isVisible = false;
        // console.log(totalTrees)
        if(i === 0 || i === split.length - 1 || j === 0 || j === split[i].length - 1){
            totalTrees++
        }
        else{
            //check left
            isEdge = false
            current = j - 1
            while(!isEdge && !isVisible){
                if(current === 0 && parseInt(split[i][j]) > parseInt(split[i][current])){
                    totalTrees++
                    treesSeen.push([i,j, "left"])
                    isVisible = true;
                }
                else if(parseInt(split[i][j]) > parseInt(split[i][current])){
                    current--
                }
                else{
                    isEdge = true;
                }
            }

            //check right
            isEdge = false;
            current = j + 1
            while(!isEdge && !isVisible){
                if(current === split[i].length - 1 && parseInt(split[i][j]) > parseInt(split[i][current])){
                    totalTrees++
                    treesSeen.push([i,j, "right"])
                    isVisible = true;
                }
                else if(parseInt(split[i][j]) > parseInt(split[i][current])){
                    current++
                }
                else{
                    isEdge = true;
                }
            }

            //check above
            isEdge = false;
            current = i - 1
            while(!isEdge && !isVisible){
                if(current === 0 && parseInt(split[i][j]) > parseInt(split[current][j])){
                    totalTrees++
                    treesSeen.push([i,j, "above"])
                    isVisible = true;
                }
                else if(parseInt(split[i][j]) > parseInt(split[current][j])){
                    current++
                }
                else{
                    isEdge = true;
                }
            }

            //check below
            isEdge = false;
            current = i + 1
            while(!isEdge && !isVisible){
                if(current === split.length - 1 && parseInt(split[i][j]) > parseInt(split[current][j])){
                    totalTrees++
                    treesSeen.push([i,j, "below"])
                    isVisible = true;
                }
                else if(parseInt(split[i][j]) > parseInt(split[current][j])){
                    current++
                }
                else{
                    isEdge = true;
                }
            }
            
    }
}
}

// console.log(split)
console.log("final", totalTrees)
// console.log(treesSeen)