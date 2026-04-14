class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }   
    static alo() {
        return "Olá, sou um método estático!";
    }
}
const meuCarro = new Carro("Porsche", 2018);

console.log(meuCarro.nome);
console.log(Carro.alo());