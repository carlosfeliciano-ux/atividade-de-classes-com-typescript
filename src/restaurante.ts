type registrarPrato = {
    nome:string;
    dt_validade:Date;
    nacionalidade:string;
}

class Prato {
    nome:string;
    dt_validade:Date;
    nacionalidade:string;

    constructor( nome:string, dt_validade:Date, nacionalidade:string) {
        this.nome = nome;
        this.dt_validade = dt_validade;
        this.nacionalidade = nacionalidade;
    }
}

class PratoRepository {
    private pratos:registrarPrato[] = [];

    salvarPrato(prato: Prato):void {
        this.pratos.push({
            nome: prato.nome,
            dt_validade: prato.dt_validade,
            nacionalidade: prato.nacionalidade
        });
    }

    consultarPrato():void {
        console.log(this.pratos);
    }
}

const lagosta = new Prato(
    "Lagosta à thermidor",
    new Date("2026-10-06"),
    "França"
)

const pastel = new Prato(
    "Pastel",
    new Date("2026-10-10"),
    "Santos, Brasil"
)

const tabelaPratos = new PratoRepository();

tabelaPratos.salvarPrato(lagosta);

tabelaPratos.salvarPrato(pastel);

tabelaPratos.consultarPrato();