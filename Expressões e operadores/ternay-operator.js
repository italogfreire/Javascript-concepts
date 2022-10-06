// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exempelos

let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top': 'Café not top'

console.log(niceBreakfast);


// Maior de 18

let age = 16

const canDrive = age >= 18 ? 'Ele pode dirigir': 'Aguarde mais um pouco'

console.log(canDrive);