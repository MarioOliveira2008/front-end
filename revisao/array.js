const carros = ["Gol", "Uno", "Palio", "Celta", "Corsa"]
console.log(carros[0]) // Gol
console.log(carros[2]) // Palio
console.log(carros[4]) // Corsa

for(i = 0; i < 6; i++) {
    console.log(carros[i]);
}

carros.forEach((valor) => console.log(valor));

const numeros = [45, 4, 9, 16, 25];
const acimaDe18 = numeros.filter((valor) => valor > 18);
console.log(acimaDe18);

for(i = 0; i < 5; i++) {
    if (numeros[i] > 18){
        console.log(numeros[i]);
    }
}

numeros.reduce((total, valor) => total + valor, 0);

console.log(numeros.map((valor) => valor * 2));