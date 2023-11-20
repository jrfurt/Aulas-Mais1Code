var palavras = ['café',  'feijão', 'anticonstitucionalissimamente', 'joaninha', 'paralelepípedo',  'mascote'];
var maiorPalavra = palavras[0];

for (let palavra of palavras) {
    if (palavra.length > maiorPalavra.length) {
        maiorPalavra = palavra;
    }
}

console.log(maiorPalavra);
