// if...else


let temparature = 37.4

let highTemperature = temparature >= 37.5
let mediumTemperature = temparature < 37.5 && temparature > 36.5

if(highTemperature){
  console.log("Está com febre alta");
} else if(mediumTemperature){
  console.log("Está com febre moderada");
} else{
  console.log("Está saudável")
}


// Usar sempre dentro dos blocos
// Transformar variáveis que tenha sentido
// o if aceita valores true