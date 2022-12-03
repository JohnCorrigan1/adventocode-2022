const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

const split  = [];

    input = input.split('\n')
    input.forEach((element) => {
        element = element.replace('\r', '')
        split.push(element)
        // console.log("element", element)
    })

    // console.log(split)
    let elfScore = 0;
    let meScore = 0;
    //helpers
    const winner = (a, b) => {
        if (a === "A"){
            if(b === "X"){
                meScore += 3;
            }
            else if(b === "Y"){
                meScore += 4;
            }
            else if (b === "Z"){
                meScore += 8;
            }
        }
        else if (a === "B"){
            if(b === "X"){
                meScore += 1;
            }
            else if(b === "Y"){
                meScore += 5;
            }
            else if (b === "Z"){
                meScore += 9;
            }
        }
        else if (a === "C"){
            if(b === "X"){
                meScore += 2;
            }
            else if(b === "Y"){
                meScore += 6;
            }
            else if (b === "Z"){
                meScore += 7;
            }
        }
    }

    split.forEach((element) => {
       let picks = element.split(" ")
       winner(picks[0], picks[1])
    })

    console.log("My score: " + meScore)
    console.log("Elf score: " + elfScore)