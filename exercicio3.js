const prompt = require('prompt-sync')();

let continuar;

do {
  let pares = 0;
  let impares = 0;

  console.log('\nDigite 10 números:');
  for (let i = 1; i <= 10; i++) {
    let numero = prompt('Número ' + i + ': ');
    while (isNaN(numero) || numero.trim() === '') {
      console.log('Valor inválido. Digite um número válido.');
      numero = prompt('Número ' + i + ': ');
    }

    numero = parseInt(numero);

    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log('\nResultado:');
  if (pares > 0) {
    console.log('Quantidade de números pares: ' + pares);
  }
  if (impares > 0) {
    console.log('Quantidade de números ímpares: ' + impares);
  }

  // Bônus: Pergunta se deseja repetir
  continuar = prompt('\nDeseja repetir o programa? (s/n): ').toLowerCase();
} while (continuar === 's');
