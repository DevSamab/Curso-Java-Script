function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);