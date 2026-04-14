export class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.ano;
    }
}

const meuCarro = new Carro("Opala", 1972);

console.log("Idade do carro:" + meuCarro.idade() + " anos");
console.log("Nome do carro:" + meuCarro.nome);