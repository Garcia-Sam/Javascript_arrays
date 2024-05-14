const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const tamanhoNome = alunos.filter((_, indice) => {  // o métoodo filter retorna o resultado da avaliação
    return medias[indice] < 7;

})

console.log(tamanhoNome); // filter sempre retorna um array, assim como o map

const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);
