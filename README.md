Este repositorio foi feito para que eu revisite alguns conceitos de estudos, conforme eu vá avançando nos estudos complemento meu read-me
dia 1 
revisitar tipos de dados primitivos

Variáveis
Quando um programa precisa reter um valor para uso futuro, ele atribui o valor a (ou “armazena” o dado em) uma variável. As variáveis têm nomes e permitem o uso desses nomes em nossos programas para se referir a valores. A maneira como as variáveis funcionam é outra característica fundamental de qualquer linguagem de programação.

Os tipos de JavaScript podem ser divididos em duas categorias: tipos primitivos e tipos de objetos. Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como strings) e valores booleanos (conhecidos como booleanos).
Tipos numéricos
Como vimos em aula, podemos armazenar números de diferentes formas:

const idade = 28
const pi = 3.14

podemos utilizar o número PI através do código Math.PI.

O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe tradicional para números reais. Um valor real é representado como a parte integral do número, seguido por um ponto decimal e a parte fracionária do número.

Pontos flutuantes também podem ser representados usando notação exponencial: um número real seguido pela letra e (ou E), seguido por um sinal opcional de mais (+) ou menos (-), e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do expoente.

Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.
