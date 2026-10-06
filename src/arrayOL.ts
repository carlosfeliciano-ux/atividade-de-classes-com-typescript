//array de objetos literais

const livros = []; //array vazio

const racionais = {
    id:0,
    titulo:"Racionais Mc's",
    subtitulo:"sobrevivendo no inferno",
    isbn:"978-85-359-3173-0",
    editora:"Companhia das letras",
    ano:2018
}

livros.push(racionais);

console.log(racionais);

livros.push(
    {
        id: 1,
        titulo:"Harry potter",
        subtitulo:"e a pedra filosofal",
        isbn: '978-8532511010',
        editora: "Rocco",
        ano: 1997
    }
)

console.log(livros);
console.log("Livro na posicao 0",racionais.isbn);
console.log("Livro na posicao 1",livros[1], livros[1]?.isbn);

