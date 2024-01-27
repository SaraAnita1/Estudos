// Conversão Implícita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) // confirmar interior vai transformar tudo em string e comparar

console.log(numero + numeroString) //concatenação

//Conversão Explícita

// Number()
// String()

console.log(numero + Number(numeroString));