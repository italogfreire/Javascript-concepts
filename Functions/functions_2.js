// Podemos declarar funções dentro de variáveis
//function expression or anonymous

// Parametros da função - Parameters

let total = 0

const sum = function (number1, number2){

 let total = number1 + number2
 return total

}

let number1 = 34
let number2 = 25

sum(number1, number2)

//console.log(`O número 1 é ${number1}`)
// console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)


// Toda função, sempre retorna algo

// Para ela retornar, devemos utilizar o retorn

// Pois na expressão console.log(`A soma é ${sum(number1, number2)}`)
// Ela havia sido undefined