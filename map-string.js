/* const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados); */

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toUpperCase();
}

console.log(nomeMaiusculas);

const nomeCurso =  "Fundamentos de JS";
const nomeDaPlataforma = " Alura";

const nomeCompleto = nomeCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto);