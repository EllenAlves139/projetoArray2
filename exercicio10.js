const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let maiorNota = 0;
let acimaDe7 = 0;

console.log('--- Estatísticas de Notas ---');
console.log('Digite as notas dos alunos (de 0 a 10). Digite -1 para encerrar.\n');

while (true) {
  let entrada = prompt('Nota: ');
  let nota = parseFloat(entrada);

  // Encerrar se digitar -1
  if (nota === -1) {
    break;
  }

  // Validar se a nota está entre 0 e 10
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Nota inválida. Digite um valor entre 0 e 10.');
    continue;
  }

  // Atualizar estatísticas
  soma += nota;
  contador++;

  if (nota > maiorNota) {
    maiorNota = nota;
  }

  if (nota > 7) {
    acimaDe7++;
  }
}

// Exibir resultado
if (contador === 0) {
  console.log('\nNenhuma nota válida foi inserida.');
} else {
  const media = soma / contador;
  console.log('\n--- Resultado ---');
  console.log('Total de notas:', contador);
  console.log('Média geral:', media.toFixed(2));
  console.log('Maior nota:', maiorNota);
  console.log('Notas acima de 7:', acimaDe7);
}
