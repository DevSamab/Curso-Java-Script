const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'joão';
delete nomes[2]; // "Delete" exclui um elemento sem alterar o índice do array

console.log(nomes);