var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var soma = 0;
let tamanhoDoArray = numeros.length;

for (let i = 0; i < tamanhoDoArray; i++) {
    if (numeros[i] % 2 != 0) {
        soma += numeros[i];
    }
}

console.log(`A soma dos números ímpares do array é igual a ${soma}.`);