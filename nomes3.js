// 4. Verificar se há maior de idade
let idades = [15, 22, 18, 17, 20];
console.log("Idades:", idades);

// Usando some()
let temMaiorDeIdade = idades.some(idade => idade >= 18);
console.log("Tem alguém com 18 anos ou mais?", temMaiorDeIdade);

// (Opcional) Usando find()
let primeiraMaiorDeIdade = idades.find(idade => idade >= 18);
console.log("Primeira idade maior ou igual a 18:", primeiraMaiorDeIdade);
