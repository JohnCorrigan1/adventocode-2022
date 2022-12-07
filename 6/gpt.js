//asked chat gpt how it would solve this problem
//I did not think to use Set much easier thanks gpt

const fs = require('fs');

let datastream = fs.readFileSync('input.txt', 'utf8');

let numCharsProcessed = 0;
let lastFourChars = "";

for (const char of datastream) {
  // Add the current character to the lastFourChars string
  lastFourChars += char;

  // If the lastFourChars string is longer than 4 characters, remove the first character
  if (lastFourChars.length > 4) {
    lastFourChars = lastFourChars.slice(1);
  }

  // Check if the last four characters are all different
  if (new Set(lastFourChars).size === 4) {
    // If they are, report the number of characters processed and break out of the loop
    console.log(numCharsProcessed);
    break;
  }

  numCharsProcessed++;
}