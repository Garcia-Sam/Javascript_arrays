const arrayNums = [1, 2, 3, 4];

function multiplicarPorDez (num) {
    return num * 10;
}

const arrayMultiplicada = arrayNums.map(multiplicarPorDez);

console.log(arrayMultiplicada);