function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito();
    return true;
}

ValidaCPF.prototype.criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    console.log(cpfArray);
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());