// defineProperty e defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave (false não mostra as chaves)
        value: estoque, // valor
        writable: false, // com essa condição, o valor de estoque fica travado (true é alterável)
        configurable: true // ela é reconfigurável (false não é configurável)
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);