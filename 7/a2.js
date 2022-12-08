const fs = require('fs');

let input = fs.readFileSync('example.txt', 'utf8');

const split = [];

    input = input.split('\n')
    input.forEach((element) => {
        element = element.replace('\r', '')
        split.push(element)
        // console.log("element", element)
    })

// console.log(split)

const path = []
let dirs
let size = 0;

split.forEach((element) => {
    const current = element.split(" ")

    if(current[0] === "$"){
        if(current[1] === "cd"){
            if(current[2] === ".."){
                path.pop()
            }
            else{
                //gets the current directory
                if(!dirs){
                    dirs = [current[2]]
                }
                else{
                    for(let i = 0; i < dirs.length; i++){
                        for(let j = 0; j < dirs[i].length; j++){
                            if(dirs[i][j] === path[path.length - 1]){
                                dirs[i].push([current[2]])
                            }
                        }
                    }
                }
                path.push(current[2])
            }
        }
    }
})

console.log(dirs)
console.log(path)