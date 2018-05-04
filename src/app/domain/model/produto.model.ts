export class Produto {
    constructor(nome: String, quantidade?: Number) {
        this.nome = nome;
        this.quantidade = quantidade;
    }


    nome: String;
    preco: Number;
    quantidade: Number;
}
