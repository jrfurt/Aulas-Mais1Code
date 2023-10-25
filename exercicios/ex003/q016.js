var palavras = ['café',  'feijão', 'joaninha', 'paralelepípedo',  'mascote'];
let tamanhoDoArray = palavras.length;
var maiorPalavra = palavras[0];

for (let i = 1; i < tamanhoDoArray; i++) {
    if (palavras[i]. length > maiorPalavra.length) {
        maiorPalavra = palavras[i];
    }
}

console.log(maiorPalavra);
