const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

const splitInput = input.split("")

const helper = (input) => {
    for(let i = 0; i < input.length; i++){
      for(let j = 0; j < input.length; j++){
        if(input[i] === input[j] && i !== j){
            return false
        }
      }
    }
    return true
}

let check;
let temp
for(let i = 0; i < splitInput.length; i++){
    if(i > 13){
        temp = [splitInput[i - 13], splitInput[i - 12], splitInput[i - 11], splitInput[i - 10], splitInput[i - 9], splitInput[i - 8], splitInput[i - 7], splitInput[i - 6], splitInput[i - 5], splitInput[i - 4], splitInput[i - 3], splitInput[i - 2], splitInput[i - 1], splitInput[i]]
        check = helper(temp)
        if(check){
        console.log("answa", i + 1)
        return
        }
    }
}
