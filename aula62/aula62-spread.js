const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes]; // spread operator - copia os valores do array, assim, tudo que eu alterar em novo não será alterado em nomes

novo.pop();
console.log(nomes);
console.log(novo);