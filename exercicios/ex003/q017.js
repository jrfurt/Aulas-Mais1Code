var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = "";
let tamanhoDoArray = numeros.length;

for (let i = 0; i < tamanhoDoArray; i++) {
    if (numeros[i] % 2 == 0) {
        numerosPares += numeros[i] + ' ';
    }
}

console.log(numerosPares);
