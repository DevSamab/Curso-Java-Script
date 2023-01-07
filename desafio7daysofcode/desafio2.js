const name = prompt('Olá! Para começarmos, me diga seu nome:');
const age = prompt(`Oi, ${name || 'você não quis me dizer seu nome, mas'}, prazer em conhecê-lo. Qual a sua idade?`);
const learn = prompt(`OK! ${name || ''} Qual linguagem de programação você está estudando?`);

alert(`Vamos recaptular: ${name || 'Você não me disse seu nome, mas'}, você tem ${age || 'receio de falar a sua idade'} e estuda ${learn || 'uma linguagem de programação secreta!'}`);

const answer = prompt(`${name || 'Amigo secreto'}, agora me diga: você gosta de estudar ${learn || 'sua linguagem de programação secreta'}? Digite:\n1 = sim\n2 = não`);

    if (answer == 1) {
        alert(`Que legal, ${name || 'amigo secreto'}, continue firme!`);
    } else {
        alert(`Que pena, ${name || 'amigo secreto'}, você já pensou em estudar outra coisa?`);
    }