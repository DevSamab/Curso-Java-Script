// for each - itera sobre os valores (igual o for of)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.forEach(function(valor, indice, array) {
    console.log(indice, valor);
});

// somando todos os valores
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
numeros.forEach(valor => {
    total += valor;
});
console.log(total);