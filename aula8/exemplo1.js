const name = 'Samuel';
const lastName = 'Barbosa';
const age = 29;
const weight = 70;
const tall = 1.83;
let imc;
let birthDate;

imc = weight / (tall * tall);
birthDate = 2022 - age;

console.log(name, lastName, 'têm', age, 'anos, pesa', weight, 'kg.');
console.log('Tem', tall, 'de altura e seu índice de massa corporal é', imc, '.');
console.log(name, 'nasceu em', birthDate, '.');
