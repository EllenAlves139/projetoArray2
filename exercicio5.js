const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpite;

console.log('Tente adivinhar o número entre 1 e 100!');

do {
  palpite = prompt('Digite seu palpite: ');

  while (isNaN(palpite) || palpite.trim() === '') {
    console.log('Valor inválido. Digite um número válido.');
    palpite = prompt('Digite seu palpite: ');
  }

  palpite = parseInt(palpite);
  tentativas++;

  if (palpite > numeroSecreto) {
    console.log('Menor!');
  } else if (palpite < numeroSecreto) {
    console.log('Maior!');
  } else {
    console.log('Parabéns! Você acertou o número em ' + tentativas + ' tentativas.');
  }
} while (palpite !== numeroSecreto);
