const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
}

h1.innerHTML = data.toLocaleDateString('pr-br', opcoes);