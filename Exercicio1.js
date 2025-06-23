let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite um número entre 1 e 20 (ou 0 para sair):'));

while (numero !== 0) {

   if (numero >= 1) {
    if (numero <= 20) {
      console.log('Tabuada de ' + numero + ':');
      for (let i = 1; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
      }
      console.log(); 
    } else {
      console.log('Número inválido! Digite um número entre 1 e 20.\n');
    }
  } else {
    console.log('Número inválido! Digite um número entre 1 e 20.\n');
  }

  numero = parseInt(prompt('Digite outro número entre 1 e 20 (ou 0 para sair): '));
}

console.log('Programa encerrado.');
