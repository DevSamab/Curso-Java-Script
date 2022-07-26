// Switch pode ser usado, em alguns casos, no lugar de if else para declarar as condicionais.
// switch-case-break-default
// Switch case é usado quando a comparação é feita apenas para uma variável.
const data = new Date('1993-04-03');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'Domingo';
    break;
case 1:
    diaSemanaTexto = 'Segunda';
    break;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sábado';
    break;
default:
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);