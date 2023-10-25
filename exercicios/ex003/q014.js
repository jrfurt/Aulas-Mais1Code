var numerosAleatorios = [0, 5, 3, 8, 10, 14];
var soma = 0;
let tamanhoDoArray = numerosAleatorios.length;

for (let i = 0; i < tamanhoDoArray; i++) {
    soma += numerosAleatorios[i];
}

var media = soma / tamanhoDoArray;
console.log(`A soma dos números do array é ${soma} e a média entre eles é de ${media}.`);
