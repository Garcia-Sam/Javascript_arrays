/* const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//              [   ], [    ]
const lista = [alunos, medias];

// console.log(lista); // exibe um único array, contendo os dois elementos (alunos, medias)

console.log(
    `A aluna da posição 1 da lista é ${lista[0][1]}.
A nota desta aluna é ${lista[1][1]}.`
);

console.log(lista[0][3]); */

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];

console.log(
    `Funcionário(a) ${funcionarios[0][0]}, ${funcionarios[1][0]} anos
Funcionário(a) ${funcionarios[0][1]}, ${funcionarios[1][1]} anos
Funcionário(a) ${funcionarios[0][2]}, ${funcionarios[1][2]} anos
`
);