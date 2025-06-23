// 2. Trabalhando com números
let numeros = [5, 12, 8, 3, 9];
console.log("Array original:", numeros);

// a) Ordenar em ordem crescente
numeros.sort((a, b) => a - b);
console.log("Ordem crescente:", numeros);

// b) Criar novo array com o dobro de cada número
let numerosDobrados = numeros.map(num => num * 2);
console.log("Números dobrados:", numerosDobrados);

// c) Calcular a soma de todos os números
let somaTotal = numeros.reduce((soma, atual) => soma + atual, 0);
console.log("Soma total dos números:", somaTotal);
