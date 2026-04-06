function somarNumeros(a, b){
    return a + b;
}
console.log(somarNumeros(5, 10));

const calcularFrete = function(peso, distancia){
    const valorFrete = peso * distancia * 0.5;
    return valorFrete;
}
console.log("O frete é: " + calcularFrete(5, 100));

const calcularFrete2 = (peso, distancia) => {
    const valorFrete = peso * distancia * 0.5;
    return valorFrete;
}
console.log("O frete é: " + calcularFrete2(5, 100));

const calcularFrete3 = (peso, distancia) => peso * distancia * 0.5;
console.log("O frete é: " + calcularFrete3(5, 100));

const calculadora = (a, b, operacao) => {
    return operacao(a, b);
}
const operacao = (a, b) => a + b;

console.log(calculadora(
    a = 2,
    b = 3,
    operacao 
));