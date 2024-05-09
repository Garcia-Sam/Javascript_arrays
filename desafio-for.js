// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
function imprimirElementos (array) {
    for (let elemento of array) {
        console.log(elemento);
    }
}
const meuArray = ['a', 'b', 'c']
//imprimirElementos(meuArray)

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const listinha = ['banana', 'gatinho', 'brócolis'];

function imprimeIndiceEElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Índice ${i}, elemento ${arr[i]}`);
    }
}
//imprimeIndiceEElemento(listinha);

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

function soma(arra) {
    let total = 0;
    for (let i = 0; i < arra.length; i++) {
       total += arra[i];
    }
    return total;
}
//console.log(soma(listaNumeros));

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor (array){
    let maior = 0;
    let menor = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return `O maior número é ${maior} e o menor número é ${menor}`;
}
//console.log(imprimeMaiorEMenor(arrMenoresMaiores));

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
//console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        //console.log(numeros[i]);
    }
}

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numerosSomar = [10, 8, 6, 9, 7, 5];
let somatoria = 0;

for (let i = 0; i < numerosSomar.length; i++) {
    somatoria += numeros[i];
}
const media = somatoria / numerosSomar.length;

console.log('Array', numeros);
console.log('Média dos Números', media.toFixed(1));