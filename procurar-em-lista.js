const aluno = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [aluno, medias];

function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno); // indexOF retorna o índice da primeira ocorrência do valor fornecido
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log(`Estudante não existe na lista`);
    }
}

exibeNomeENota("Juliana");
exibeNomeENota("Vini");