// throw = disparar

function sayMyName(name = '') {
  if (name === '') {
      throw 'Nome é obrigatório'
  }

  console.log(name)
}
// try.. catch = tentar pegar

try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após ao try/catch')