// slice() -> usado para fatiar o array

const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes.slice(1, 3); // colocando índice 3, será mostrado até o dois.

// const novo = nomes.slice(0, -1); -> usando números negativos, como o -1, eu retiro apenas o último índice

console.log(novo);