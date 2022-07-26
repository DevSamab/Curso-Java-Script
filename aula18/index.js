function criarPessoa(name, lastName, age) {
   return {
    name: name,
    lastName: lastName,
    age: age
   };
}

const pessoa1 = criarPessoa('Samuel', 'Barbosa', 29);
const pessoa2 = criarPessoa('Ludmila', 'Barbosa', 29);

console.log(pessoa2.name);