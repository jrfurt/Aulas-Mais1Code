var numeros = [8, 1, 5, 9, 6, 2];
let tamanhoDoArray = numeros.length;

for (let i = 0; i < tamanhoDoArray - 1; i++) {
    let menorNumero = i;
    for (let j = i + 1; j < tamanhoDoArray; j++) {
        if (numeros[j] < numeros[menorNumero]) {
            menorNumero = j;
        }
    }

    let auxiliar = numeros[i];
    numeros[i] = numeros[menorNumero];
    numeros[menorNumero] = auxiliar;
}

console.log(numeros);
