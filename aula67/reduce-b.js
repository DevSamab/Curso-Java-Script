// retornar um array com números pares (aqui ésó exemplo, mas seria melhor usar filter())

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total);