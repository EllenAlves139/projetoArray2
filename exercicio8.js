const prompt = require('prompt-sync')();

let vitorias = 0;

console.log('Jogo do Par ou Impar');

while (true) {
  let escolha = prompt('Par ou Impar? ').toLowerCase();
  while (escolha !== 'par' && escolha !== 'impar' && escolha !== 'ímpar') {
    escolha = prompt('Escolha inválida. Digite "par" ou "impar": ').toLowerCase();
  }

  let jogador = parseInt(prompt('Digite um número de 1 a 5: '));
  while (isNaN(jogador) || jogador < 1 || jogador > 5) {
    jogador = parseInt(prompt('Número inválido. Digite entre 1 e 5: '));
  }

  let computador = Math.floor(Math.random() * 5) + 1;
  let soma = jogador + computador;
  let resultado = soma % 2 === 0 ? 'par' : 'impar';

  console.log('Você jogou', jogador, 'e o computador jogou', computador);
  console.log('Soma:', soma, '-', resultado);

  if (resultado === escolha || (escolha === 'ímpar' && resultado === 'impar')) {
    console.log('Você venceu!\n');
    vitorias++;
  } else {
    console.log('Você perdeu!');
    break;
  }
}

console.log('Fim do jogo. Total de vitórias:', vitorias);
