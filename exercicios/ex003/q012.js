var numeros = [0, 5, 87, 1, 34, 33, 12, 7];
let maiorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);
