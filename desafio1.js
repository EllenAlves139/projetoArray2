let numero = require('prompt-sync')();

numero = parseInt(numero('Digite um numero: '));

console.log('\n=== Multiplicação ===');
for (let i = 0; i < 10; i++) {
    console.log(numero + ' * ' + i + ' = ' + (numero * i));
}

console.log('\n=== Divisão ===');
for (let i = 0; i < 10; i++) {
    if (i !== 0) {
        console.log(numero + ' / ' + i + ' = ' + (numero / i).toFixed(1));
    } else {
        console.log(numero + ' / ' + i + ' = Não é possível dividir por zero');
    }
}

console.log('\n=== Soma ===');
for (let i = 0; i < 10; i++) {
    console.log(numero + ' + ' + i + ' = ' + (numero + i));
}

console.log('\n=== Subtração ===');
for (let i = 0; i < 10; i++) {
    console.log(numero + ' - ' + i + ' = ' + (numero - i));
}
