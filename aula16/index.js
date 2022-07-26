// Quando declaramos uma constante sobre colchetes chamamos de Arrays (lista de elementos.)
// Diferente das strings que cada letra tem uma posição, nos arrays cada elemento tem uma posição.
//                0       1        2
const alunos = ['luiz', 'Maria', 'João'];
//console.log(alunos[1]);//O resultado imprimirá 'Maria'.
//_____________________________________________________________________________

//Para alterar um elemento do Array e para acrescentar:
//alunos [0] = 'Eduardo';
// alunos [3] = 'Luiza';
// console.log(alunos);
//_____________________________________________________________________________
//Para saber o tamanho da array:
//console.log(alunos.lenght);
//_____________________________________________________________________________
//Quando a array for muito grande, podemos incluir elementos da seguinte forma:
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';
// console.log(alunos);
//_____________________________________________________________________________
//Outra forma mais fácil seria acrescentar ao final um novo elemento com o seguinte comando:
alunos.push('Luiza');
alunos.push('Fábio');
alunos.push('Luana');
console.log(alunos);
//Para acrescentar no início seria: alunos.unshift('luiza');
//_____________________________________________________________________________
//alunos.pop();//remove o último elemento.
//const remov = alunos.pop();//guarda o elemento removido em uma constante.

//alunos.shift();//remove o primeiro elemento.
//const remov = alunos.shift();//guarda o elemento removido em uma constante.
//______________________________________________________________________________
//Todas essas formas alteram o índice dos elementos.
//Para que isso não aconteça
//delete.alunos[1];//vai deletar 'Maria', mas no lugar aparecerá 'undefined'.