// 5. Verificar se um livro existe no array
let livros = ["Dom Casmurro", "O Pequeno Príncipe", "1984", "A Menina que Roubava Livros"];
console.log("Lista de livros:", livros);

// Solicita entrada do usuário
let tituloDigitado = prompt("Digite o título de um livro:");

// Verifica se o título existe na lista
if (livros.includes(tituloDigitado)) {
    console.log("O livro existe na lista.");
} else {
    console.log("O livro NÃO está na lista.");
}
