let prompt = require('prompt-sync')();

let total = 0;
let valor;

console.log('--- Caixa Registradora ---');
console.log('Digite os valores das compras. Digite 0 para finalizar.\n');

do {
  valor = prompt('Valor da compra: R$ ');

  // Validação: valor numérico e não vazio
  while (isNaN(valor) || valor.trim() === '') {
    console.log('Valor inválido. Tente novamente.');
    valor = prompt('Valor da compra: R$ ');
  }

  valor = parseFloat(valor);
  if (valor > 0) {
    total += valor;
  }

} while (valor !== 0);

console.log('\nTotal da compra: R$ ' + total.toFixed(2));

// Escolha da forma de pagamento
let formaPagamento = prompt('Deseja pagar em "dinheiro" ou "cartão"? ').toLowerCase();

switch (formaPagamento) {
  case 'dinheiro':
    let desconto = total * 0.10;
    let valorFinal = total - desconto;
    console.log('Desconto de 10% aplicado.');
    console.log('Valor a pagar: R$ ' + valorFinal.toFixed(2));
    break;

  case 'cartão':
    console.log('Nenhum desconto aplicado.');
    console.log('Valor a pagar: R$ ' + total.toFixed(2));
    break;

  default:
    console.log('Forma de pagamento inválida. Nenhuma operação realizada.');
}

