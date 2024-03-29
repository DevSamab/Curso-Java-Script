const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

const id = pessoas.map((obj, indice) => {
    obj.id = indice;
    return obj;
});
console.log(id);