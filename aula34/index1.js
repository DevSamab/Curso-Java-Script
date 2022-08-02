// for in lê os índices dentro de arrays[] e objetos {}

const person = {
    name: 'Samuel',
    lastName: 'Barbosa',
    age: 29
};

for (let key in person) {
    console.log(key, person[key]);
}