var numeros = [9, 5, 6, 3];

function media(array) {
    let tamanhoDoArray = array.length;
    let soma = 0;
    for (let i = 0; i < tamanhoDoArray; i++) {
        soma += array[i];
    }

    var media = soma / tamanhoDoArray;
    return media;
}

var mediaDosNumeros = media(numeros);
console.log(`A média dos números do array é ${mediaDosNumeros}.`);
