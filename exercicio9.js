const prompt = require('prompt-sync')();

// Função auxiliar para "esperar" o tempo
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function contagemRegressiva() {
  let numero = parseInt(prompt('Digite o número inicial da contagem regressiva: '));

  while (isNaN(numero) || numero < 0) {
    numero = parseInt(prompt('Valor inválido. Digite um número positivo: '));
  }

  console.log('\nIniciando contagem...\n');

  for (let i = numero; i >= 0; i--) {
    console.log(i);
    await esperar(500); // pausa de 0.5 segundo
  }

  console.log('\nBoom!');
}

contagemRegressiva();
