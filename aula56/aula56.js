// Factory Function (Função Fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        imc() {
            const indice =  this.peso / (this.altura ** 2).toFixed(2);
            return indice.toFixed(2);
        }
    };   
}

const p1 = criaPessoa('Samuel', 'Barbosa', 1.83, 69);
console.log(p1.imc());
const p2 = criaPessoa('Lud', 'Barbosa', 1.68, 73);
console.log(p2.imc('falando sobre JS'));