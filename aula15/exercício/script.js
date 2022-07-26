const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é um número inteiro: ${Number.isInteger(numero)}</P>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</P>`;
texto.innerHTML += `<p>Arredondando para baixo é ${Math.floor(numero)}</P>`;
texto.innerHTML += `<p>Arredondando para cima é ${Math.ceil(numero)}</P>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</P>`;