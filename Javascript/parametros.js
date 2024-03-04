//Parâmetros de Função

function soma(numero1, numero2) {
  return numero1 + numero2
}

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parametros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade("Sara", 26))

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2
}
//como seria passar os dois parametros
// console.log(multiplica(soma(4, 5), soma(3, 3)))
// se pasar apenas um parametro
console.log(multiplica(soma(4, 5)))

// boa pratica é passar poucos argumentos para a função