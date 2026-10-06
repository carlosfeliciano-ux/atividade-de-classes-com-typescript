type registroLivro = {
    titulo: string;
    subtitulo: string;
    isbn: string;
    editora: string;
    ano: number;
}

class Livro {
    titulo: string;
    subtitulo: string;
    editora: string;
    isbn: string;
    ano: number;

    constructor(titulo: string, subtitulo: string, editora: string, isbn: string, ano: number) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.editora = editora;
        this.isbn = isbn;
        this.ano = ano;
    }
}

class LivroRepository {
    private livros: registroLivro[] = [];

    salvar(livro: Livro): void {
        this.livros.push({
            titulo: livro.titulo,
            subtitulo: livro.subtitulo,
            isbn: livro.isbn,
            editora: livro.editora,
            ano: livro.ano
        });
    }

    consultarLivros(): void {
        console.log(this.livros);
    }
}

const racionais = new Livro(
    "Racionais MC's",
    "Sobrevivendo ao inferno",
    "Companhia das Letras",
    "978-8535931730",
    2018
);

const harry = new Livro(
    "Harry potter",
    "e a pedra filosofal",
    "Companhia das Letras",
    "978-6555324013",
    1997
) ;

const tabelaLivros = new LivroRepository();

tabelaLivros.salvar(racionais);

tabelaLivros.salvar(harry);

tabelaLivros.consultarLivros();