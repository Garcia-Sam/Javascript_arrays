const notas = [10, 6.5, 8, 7.5];

let somasDasNotas = 0;

/* notas.forEach(function (nota) { // executa esta função percorrendo todos os elementos do array, não precisando de uma variável externa.
    somasDasNotas += nota
}) */

notas.forEach(somaNotas);

function somaNotas (nota) {
    somasDasNotas += nota;
}

const media = somasDasNotas / notas.length;

console.log(`A média das notas é ${media}`);