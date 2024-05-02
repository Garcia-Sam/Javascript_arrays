const notas = [10, 6, 8];
notas.push(7); // sempre adiciona o elemento no final do array (push só funciona atrelado a um array)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media.toFixed(1));
