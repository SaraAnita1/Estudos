const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area)
