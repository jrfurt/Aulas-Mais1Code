var valorMin = 1;
var valorMax = 10;

function gerarNumeroAleatorio(min, max) {
    var aleatorioInteiro = Math.floor(Math.random(min, max) * 10);
    console.log(aleatorioInteiro);
    return;
}

gerarNumeroAleatorio(valorMin, valorMax);
