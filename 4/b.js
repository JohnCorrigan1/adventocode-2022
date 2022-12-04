const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

let split = [];
let total = 0;

    input = input.split('\n')
    input.forEach((element) => {
        element = element.replace('\r', '')
        split.push(element)
        // console.log("element", element)
    })

    console.log(split)

    split.forEach((element) => {
        const sections = element.split(",")
        // console.log(sections)
        const first = sections[0].split("-")
        const second = sections[1].split("-")
        console.log(total)
        console.log(first, second)
        const firstCheck = []
        const secondCheck = []
        for(let i = parseInt(first[0]); i <= parseInt(first[1]); i++){
            firstCheck.push(i.toString())
        }
        for(let i = parseInt(second[0]); i <= parseInt(second[1]); i++){
           secondCheck.push(i.toString())
        }

        //check if all of the first check array is in the second check array
        //or if all of the second check array is in the first check array
      for(let i = 0; i < firstCheck.length; i++){
          if(secondCheck.includes(firstCheck[i])){
              total++
              break
          }
      }
    })

    console.log(total)

    

