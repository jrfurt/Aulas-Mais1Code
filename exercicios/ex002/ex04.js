const desconto = 10 / 100;

var valorDoProduto = 33;
var quantidade = 3;
var valorFinal = valorDoProduto * quantidade;
var valorFinalComDesconto;

if (valorFinal >= 100) {
    valorFinalComDesconto = valorFinal - (valorFinal * desconto);
    console.log(valorFinalComDesconto);
} else {
    valorFinal = valorDoProduto * quantidade;
    console.log(valorFinal);
}