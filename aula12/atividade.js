let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

//Essa seria uma maneira mais moderna de resolver esse problema, 
//pois não é necessário criar uma nova vaiável.
//[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);