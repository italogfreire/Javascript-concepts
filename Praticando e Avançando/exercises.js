// 1. Declare yna variável de nome weight

var weight;

// 2. Que tipo de dados é a variável acima?
console.log(typeof weight)

undefined

// 3. Declare uma variável e atribua valores para cada um dos dados:

let name = "José";
let age = 33;
let stars = 3.3;
let isSubscribed = true;

// 4. Crie um objeto com base no exemplo 3

let student = {
   name: "José",
   age: 33,
   weight: 80,
   isSubscribed: true
}

//4.2

//console.log(`${student.name} de idade ${student.age}, pesa ${student.weight}.`);


// 5. Declarar uma variável do tipo Array, de nome students e atribua a ela nenhum valor

let students = []


// 6. Reatribuir um valor para variável acima, colocando dentro dela, o objeto da questão 4

students = [
   student
]

// console.log(students)


// 7. Colocar no console o valor da posição 0 do Array acima

// console.log(students[0])

// 8. Criar um novo studente e colocar na posição 1 do Array students

const john = {
   name: "John",
   age: 24,
   weight: 75,
   isSubscribed: true
}

students = [
   student,
   john
]

console.log(students)

// outra forma seria, atribuindo o john a posição 1

// students[1] = john

console.log(a)
let a = 1