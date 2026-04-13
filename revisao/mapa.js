const frutas = new Map();

frutas.set('maçã', 5);
frutas.set('banana', 7);
frutas.set('laranja', 10);

console.log("O preço da banana é: R$ " + frutas.get('banana')); // O preço da banana é: R$ 7

const legumes = new Map([
    ['cenoura', 4],
    ['batata', 6],
    ['abobrinha', 8]
]);

console.log("O preço da cenoura é: R$ " + legumes.get('cenoura'));

frutas.set("manga", 12);
console.log(frutas);

legumes.forEach((valor, chave) => console.log(`${chave}: R$ ${valor}`));
for (const x of legumes.keys()){
    console.log(x);
}
