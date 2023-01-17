// you can write js here

console.log("exo-5");
var input = prompt("Entrez un mot ou une phrase");
input = input.toLowerCase();

const vowels = ["a", "e", "i", "o", "u", "y"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  vowels.indexOf(input[i]) > -1 ? resultArray.push(input[i]) : null;
  //console.log(vowels.indexOf(input[i]));
}

console.log(resultArray.join("").toUpperCase());

//print et appel
// console.log(input);
//console.log(resultArray.includes(input,vowels));
