// for of é mais simples, ele responde quando queremos percorrer do ínico ao fim do array
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//[let nota - guarda os valores(elementos)]
for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);