// Separar um texto que contem espaços, em um novo array onde cada texto é 
// uma posição do array. Depois disso, transforme o array em um texto e onde
// eram espaços coloque _

let phrase = "I am a program boy"

let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")

console.log(phraseWithUnderScore.toLowerCase())