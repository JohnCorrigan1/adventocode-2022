const fs = require("fs");

let input = fs.readFileSync("example.txt", "utf8");

const split = [];

input = input.split("\n");
input.forEach((element) => {
  element = element.replace("\r", "");
  split.push(element.split(""));
  // console.log("element", element)
});

let totalTrees = 0;
let isVisible = false;
const treesSeen = [];

for(let i = 0; i < split.length; i++){
    for(let j = 0; j < split[i].length; j++){
        isVisible = false;
        if(i === 0 || i === split.length - 1 || j === 0 || j === split[i].length - 1){
            totalTrees++
        }
        else{

            //check left
            let isEdge = false;
            let current = j
            while(!isEdge && !isVisible){
                if(parseInt(split[i][j]) <= parseInt(split[i][current - 1])){
                    isEdge = true;
                }
                else if(current === 0){
                    totalTrees++
                    treesSeen.push([i,j])
                    isVisible = true;
                }
                else{
                    current--
                }
            }

            //check right
            isEdge = false;
            current = j
            while(!isEdge && !isVisible){
                if(parseInt(split[i][j]) <= parseInt(split[i][current + 1])){
                    isEdge = true;
                }
                else if(current === split[i].length - 1){
                    totalTrees++
                    treesSeen.push([i,j])
                    isVisible = true;
                }
                else{
                    current++
                }
            }

            //check above
            // isEdge = false;
            // current = i
            // while(!isEdge && !isVisible){
            //     if(current === 0 && parseInt(split[i][j]) <= parseInt(split[current + 1][j])){
            //         totalTrees++
            //         treesSeen.push([i,j])
            //         isVisible = true;
            //     }
            //     else if(parseInt(split[i][j]) <= parseInt(split[current - 1][j])){
            //         isEdge = true;
            //     }
            //     else if(current === 0){
            //         totalTrees++
            //         treesSeen.push([i,j])
            //         isVisible = true;
            //     }
            //     else{
            //         current--
            //     }
            // }

            //check below
            // isEdge = false;
            // current = i
            // while(!isEdge && !isVisible){
            //     console.log("current", current)
            //     console.log(split[i][j])
            //     console.log(i, j)
            //     if(current === split.length - 1 && parseInt(split[i][j]) <= parseInt(split[current - 1][j])){
            //         totalTrees++
            //         treesSeen.push([i,j])
            //         isVisible = true;
            //     }
            //     else if(parseInt(split[i][j]) <= parseInt(split[current + 1][j])){
            //         isEdge = true;
            //     }
            
            //     else if(current === split[i][j].length - 1){
            //         totalTrees++
            //         treesSeen.push([i,j])
            //         isVisible = true;
            //     }
            //     else{
            //         current++
            //     }
            }
            
    }
}


console.log(split)
console.log(totalTrees)
console.log(treesSeen)