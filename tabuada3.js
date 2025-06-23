
prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite o número da tabuada desejada:'));
let senha;
let tentativas = 0;
let senhaCorreta = "ella200";

// Permite até 3 tentativias para digitar a senha corretamente
while (tentativas < 3 ) {
    senha = prompt('Digite a senha: ');
    if (senha === senhaCorreta) {
        console.log('Tabuada do: ', numero);
        for (let i =0; i <= 10; i++) {
            console.log(numero + ' * ' + i + ' = ' );
        }
        break; // Sai do loop quando a senha 
    } else {
        tentativas++;
        console.log('Senha inválida!')
    }
}