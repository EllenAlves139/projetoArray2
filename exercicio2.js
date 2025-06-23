const prompt = require('prompt-sync')();

let opcao;

do {
  console.log('\n=== Menu de Operações ===');
  console.log('1 - Somar dois números');
  console.log('2 - Subtrair dois números');
  console.log('3 - Multiplicar dois números');
  console.log('4 - Dividir dois números');
  console.log('5 - Sair');

  opcao = prompt('Escolha uma opção (1-5): ');

  if (opcao === '5') {
    console.log('Saindo... Até mais!');
    break;
  }

  if (!['1','2','3','4'].includes(opcao)) {
    console.log('Opção inválida! Tente novamente.');
    continue;
  }

  // Solicita os números
  let num1 = prompt('Digite o primeiro número: ');
  while (isNaN(num1) || num1.trim() === '') {
    console.log('Número inválido, digite novamente.');
    num1 = prompt('Digite o primeiro número: ');
  }
  num1 = parseFloat(num1);

  let num2 = prompt('Digite o segundo número: ');
  while (isNaN(num2) || num2.trim() === '') {
    console.log('Número inválido, digite novamente.');
    num2 = prompt('Digite o segundo número: ');
  }
  num2 = parseFloat(num2);

  // Trata divisão por zero
  if (opcao === '4') {
    while (num2 === 0) {
      console.log('Divisão por zero não é permitida! Digite outro número.');
      num2 = prompt('Digite o segundo número: ');
      while (isNaN(num2) || num2.trim() === '') {
        console.log('Número inválido, digite novamente.');
        num2 = prompt('Digite o segundo número: ');
      }
      num2 = parseFloat(num2);
    }
  }

  let resultado;

  switch(opcao) {
    case '1':
      resultado = num1 + num2;
      console.log('Resultado da soma: ' + resultado);
      break;
    case '2':
      resultado = num1 - num2;
      console.log('Resultado da subtração: ' + resultado);
      break;
    case '3':
      resultado = num1 * num2;
      console.log('Resultado da multiplicação: ' + resultado);
      break;
    case '4':
      resultado = num1 / num2;
      console.log('Resultado da divisão: ' + resultado);
      break;
  }

} while (opcao !== '5');
