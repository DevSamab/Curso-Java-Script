const pessoa = {
    nome: 'Samuel',
    sobrenome: 'Barbosa',
    idade: 29,
    endereco: {
        rua: 'Fernandópolis',
        numero: 60,
    }
};

// Atribuição via desestruturação.
const {nome, sobrenome, idade} = pessoa;
console.log(`Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade.`);

// Dessa forma, será retornado todo o valor do objeto.
const {endereco} = pessoa;
console.log(endereco);
// Retorno: { rua: 'Fernandópolis', numero: 60 }

// Dessa forma, retornará apenas os elemntos rua e numero.
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);
// Fernandópolis 60