var numeros = [];
numeros[0] = 8;
numeros[1] = 7;
numeros[2] = 5;
numeros[3] = 1;
numeros[4] = 2;
numeros[5] = 20;
numeros[6] = 17;
numeros[7] = 14;
numeros[8] = 32;
numeros[9] = 13;

var numerosMaioresQueDez = "";
let tamanhoDoArray = numeros.length;

for (let i = 0; i < tamanhoDoArray; i++) {
    if (numeros[i] > 9) {
        numerosMaioresQueDez += numeros[i] + " ";
    }
}

console.log(numerosMaioresQueDez);
