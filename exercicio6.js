const prompt = require('prompt-sync')();

let inicio = prompt('Digite o número inicial: ');
while (isNaN(inicio) || inicio.trim() === '') {
  console.log('Número inválido. Tente novamente.');
  inicio = prompt('Digite o número inicial: ');
}
inicio = parseInt(inicio);

let fim = prompt('Digite o número final: ');
while (isNaN(fim) || fim.trim() === '') {
  console.log('Número inválido. Tente novamente.');
  fim = prompt('Digite o número final: ');
}
fim = parseInt(fim);

if (inicio >= fim) {
  console.log('O número inicial deve ser menor que o final.');
} else {
  console.log('\nContando de ' + inicio + ' até ' + fim + ':');
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log(i + ' é par');
    } else {
      console.log(i + ' é ímpar');
    }
  }
}
