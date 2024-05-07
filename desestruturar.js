const aluno = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [aluno, medias];

function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista; // desestruturar 
        const indice = alunos.indexOf(aluno); // indexOF retorna o índice da primeira ocorrência do valor fornecido
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log(`Estudante não existe na lista`);
    }
}

exibeNomeENota("Juliana");
exibeNomeENota("Vini");