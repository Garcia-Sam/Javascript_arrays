const notas = [10, 9.5, 8, 7, 6];

/* const notasAtualizadas = notas.map(function (nota) {
    return nota + 1;
}) */

/* const notasAtualizadas = notas.map((nota) => {
    return nota + 1;
}) */

    // Ou
                                                            // (?) condição de if    (:) condição else
const notasAtualizadasSimplificada = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1); // arrow function é comumente usada em callbacks

//console.log(notasAtualizadas);
console.log(notasAtualizadasSimplificada); // quando necessário o método map sempre retorna um array novo com os resultados
