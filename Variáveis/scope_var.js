/*  #Scope

 // Escopo determina a visibilidade de alguma variável no JS


    #Block Statemente

  // Vamos iniciar um bloco

  {
    //Aqui dentro é um bloco e posso colocar qualquer código

  } // Aqui fechamos o bloco


  O bloco criará um novo escopo, que chamamos de  block-scoped

  // var é global e, também local.

  // ou seja, quando colocamos o nosso var, ele identifica que existe um var, mesmo sendo colocado
  após noss primeiro console.log -> hoisting

 */
console.log('> existe x antes do bloco?', x)

{
  var x = 0
}

console.log('> existe x depois do bloco?', x)