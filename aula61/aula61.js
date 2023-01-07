// Funções geradoras -> recurso especial para quase que pausar o código em um lugar específico

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value); // Chama Valor 1
console.log(g1.next().value); // Chama Valor 2
console.log(g1.next().value); // Chama Valor 3