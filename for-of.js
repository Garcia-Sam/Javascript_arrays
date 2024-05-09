    // for of é mais simples, ele responde quando queremos percorrer do ínico ao fim do array
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//[let nota - guarda os valores(elementos)]
for (let nota of notas) {
    somaDasNotas += nota;
    console.log(nota);
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`); 

/* const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos); */

// const precos = [5.5, 6.2, 14, 19.5];

// let desconto = 0.90;

// for (let preco of precos) {
//  preco = preco * desconto;
// }

// console.log(precos);
