// Funções geradoras -> recurso especial para quase que pausar o código em um lugar específico

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

// Chamando os valores com iteração
const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}