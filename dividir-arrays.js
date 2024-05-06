const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2) // contendo parâmetro de fim, o elemento exato do fim não é incluido
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2) // começando pela metade da lista

console.log(sala1);
console.log(sala2);