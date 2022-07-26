function saudacao (nome) {
    console.log(`Olá, ${nome}, tudo bem?`);
}

saudacao ('Samuel');
saudacao ('Ludmila');

//A constante variável recebe o resultado da função.
function saudacao (nome) {
    return `Olá, ${nome}, tudo bem?`;
}

const variavel = saudacao('Samuel');
console.log(variavel);

//Depois de return, a função é finalizada. Qualquer coisa abaixo será ignorado.
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(4, 2));

//Neste caso, como a função é atribuída a uma constante, deve-se finalizar com ponto e vírgula.
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));

//Outra forma moderna é a Arrow Function:
const raiz = n => n ** 0.5;
console.log(raiz(9));