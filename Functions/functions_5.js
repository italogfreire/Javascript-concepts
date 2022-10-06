// function hoisting

// Ou seja, mesmo colocando a função antes, de onde foi declarada, a função roda

sayMyName();

function sayMyName(){
  console.log('Ítalo')
}

/* Porém se utilizarmos uma variável, com a função, já da errado.

sayMyName();

 const sayMyName = function(){
 console.log('Ítalo')
}

*/