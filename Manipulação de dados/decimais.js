// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 327372327.238238332

console.log(number.toFixed(2). replace(".", ",")) // coloca 2 casas decimais

// replace faz com que possamos trocar algo, nesse caso o ponto pela vírgula
// Porém o replace faz com que o number se transforma em string