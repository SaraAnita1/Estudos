const texto1 = "Olá Mundo";
const texto2 = 'Olá Mundo';
const senha = "senhaSuperSecreta456";
const stringDeNumeros = "3456";
const citacao = "meu nome é ";


//template string oou template literal

//concatenação (+)

const meuNome = "Sara"
console.log(citacao + meuNome) //exibir no terminal


// asc II

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Colocar tudo em Minusculo

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// contar caracteres

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

//Percebeu que length não leva parênteses no final da palavra? Há uma diferença entre métodos e propriedades

//A propriedade é quando criamos algo para modificar os atributos de nossa classe.

//Atributos é quando criamos algo que representam os valores / estados de nossa classe.

//Método é quando criamos algo que pode ou não ter um retorno mas realiza uma ação de nossa classe.