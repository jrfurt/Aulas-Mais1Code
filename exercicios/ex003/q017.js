var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = "";

for (let numero of numeros) {
    if (numero % 2 == 0) {
        numerosPares += numero + ' ';
    }
}

console.log(numerosPares);
