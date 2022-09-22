// Alert é uma abreviação para umas das funcionalidades do comando Window no console do navegador.
// exemplos: window.alert('Mensagem') - a página só carrega se a pessao der 'ok'.
// window.confirm('Deseja realmente apagar?') - aparecerá cancelar ou confirmar.
// window.prompt('Digite seu nome') - aparecerá um campo para que a pessoa possa digitar algo.
let n1 = prompt('Digite um número.');
let n2 = prompt('Digite outro número.');
n1 = parseFloat(n1); //Outra forma seria n1 = Number(n1)
n2 = parseFloat(n2); //Outra forma seria n2 = Number(n2)
const resultado = n1 + n2;
alert(`A soma dos dois números é ${resultado}`);

//Estudando estrutura de repetição feito como exercício da aula de JavaScript.
let contador = 1;
while(contador <= 10){
    if (contador == 1)
        console.log(`A estrutura se repetiu ${contador} vez`);
    else
        console.log(`A estrutura se repetiu ${contador} vezes.`);
    contador++; //contador = contador + 1;
}

console.log("A estrutura de repetição foi finalizada.");
