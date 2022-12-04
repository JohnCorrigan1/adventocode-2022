const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

const split = [];

    input = input.split('\n')
    input.forEach((element) => {
        element = element.replace('\r', '')
        split.push(element)
        // console.log("element", element)
    })

    // console.log(split)
    let elfScore = 0;
    let me = 0;
    //helpers
    const winner = (a, b) => {
        if (a === "A"){
            if(b === "X"){
                elfScore += 4;
                me += 4;
            }
            else if(b === "Y"){
                me += 8;
                elfScore += 1;
        }
            else if (b === "Z"){
                me += 3;
                elfScore += 7;
        }
    }
        else if (a === "B"){
            if(b === "X"){
                elfScore += 8;
                me += 1;
            }
            else if(b === "Y"){
                me += 5;
                elfScore += 5;
        }
            else if (b === "Z"){
                me += 9;
                elfScore += 2;
        }
        }
        else if (a === "C"){
            if(b === "X"){
                elfScore += 3;
                me += 7;
            }
            else if(b === "Y"){
                me += 2;
                elfScore += 9;
        }
            else if (b === "Z"){
                me += 6;
                elfScore += 6;
        }
        }
    }

    split.forEach((element) => {
       let picks = element.split(" ")
       winner(picks[0], picks[1])
    })

    console.log("My score: " + me)
    console.log("Elf score: " + elfScore)