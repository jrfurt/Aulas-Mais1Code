var estoque = {
    caneta: 50,
    caderno: 35,
    mochila: 15,
    adicProdutos(produto, qtd) {
        this[produto] += qtd;
    },
    adicNovoProduto(produto, qtd) {
        this[produto] = qtd;
    },
    exibirEstoque(produto) {
        console.log(`Há ${this[produto]} unidades do produto em estoque.`)
    }
}

estoque.adicProdutos("caneta", 40);
estoque.adicNovoProduto("lapiseira", 25)
estoque.exibirEstoque("lapiseira");
