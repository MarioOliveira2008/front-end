const pessoa = {
    nome: 'João',
    sobrenome: 'Roccela',
    idade: 40,
    cargo: 'Instrutor'
}

const entidade = new Map([
    ['nome', 'João'],
    ['sobrenome', 'Roccela'],
    ['idade', 40],
    ['cargo', 'Instrutor']
]   
);

console.log(pessoa.sobrenome);
console.log(entidade.get('sobrenome'));

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = "nome: Bento, sobrenome: Andrade, idade: 69, cargo: Estudante";
const alunoObj = JSON.parse(aluno);
console.log(alunoObj);
console.log(alunoObj.nome);
console.log(aluno.nome);