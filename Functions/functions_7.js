// callback function

function sayMyName(name){
  console.log('Antes de executar');

  name()

  console.log('Depois de executar');
}

sayMyName (
  () => {
    console.log('Estou em uma callback');
  }
  
)