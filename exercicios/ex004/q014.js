var produto = {
    nome: "caneta",
    preço: 1.5,
    qtdEmEstoque: 50,
}

function calcularTotal(preçoProduto, quantidade) {
    var valorTotal = preçoProduto * quantidade;
    return valorTotal;
}

var valorTotal = calcularTotal(produto.preço, produto.qtdEmEstoque);
console.log(`O valor total dos produtos em estoque é ${valorTotal}.`);
