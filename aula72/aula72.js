// Usando Getter e Setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
p1.estoque = 500; // caso uma string seja passada, será retornado a msg Bad value
console.log(p1.estoque);