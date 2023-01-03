//os ... significam rest parameter, sinalizando que qualquer valor exedente pertence ao parâmetro numeros
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);