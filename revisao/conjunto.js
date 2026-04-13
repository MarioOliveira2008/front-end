const letras = new Set();

letras.add('a');
letras.add('b');
letras.add('c');


const letrasGregas = new Set(['alpha', 'beta', 'gamma']);
letrasGregas.add('alpha'); // Não será adicionado, pois já existe
letrasGregas.add('delta');

console.log(letrasGregas);

letrasGregas.has("épsilon");
console.log(letrasGregas.has("épsilon")); // false
console.log(letrasGregas.has("alpha")); // true

letrasGregas.forEach((valor) => console.log(valor));
 
for (const elemento of letrasGregas.values()){
    console.log(elemento);
}

for (const elemento of letrasGregas.keys()){
    console.log(elemento);
}