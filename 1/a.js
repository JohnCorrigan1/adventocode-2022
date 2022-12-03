const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

const split  = [];

    input = input.split('\n')
    input.forEach((element) => {
        element = element.replace('\r', '')
        split.push(element)
        // console.log("element", element)
    })

    let sum = 0;
    const sums = [];

    split.forEach((element, index) => {
        // console.log(index)
        if (element === "") {
            sums.push(sum)
            sum = 0; 
        }
        else if(index === split.length -1){
            sum += parseInt(element)
            sums.push(sum)
        }
        else sum += parseInt(element);
    
    })

    //reverse sort split array
    sums.sort((a, b) => b - a);
    console.log(sums[0] + sums[1] + sums[2])
    //a is sums[0] b is sums[0] + sums[1] + sums[2]