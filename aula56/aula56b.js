// Getter e Setter
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        get imc() {
            const indice =  this.peso / (this.altura ** 2).toFixed(2);
            return indice.toFixed(2);
        }
    };   
}

const p1 = criaPessoa('Samuel', 'Barbosa', 1.83, 69);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome); // Assume o nome de Maria por causa do set
console.log(p1.sobrenome); // Assume Oliveira Silva por causa do set
console.log(p1.fala()); // Como não declarei com get, preciso chamar como função, com parênteses.
console.log(p1.imc); // Aqui eu pude chamar a função IMC sem os parênteses pq ao declarar com get, ao chamar eu trago apenas o seu valor.
console.log(`Você se chama ${this}`)