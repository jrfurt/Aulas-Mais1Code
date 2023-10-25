var pessoa = {
    nome: "Elielcio das Tantas",
    idade: 45,
    endereço: "rua do mercado velho"
}

function mostrarInfo(pessoaX) {
    for (let i in pessoaX) {
        console.log(i + ": " + pessoaX[i]);
    }
}

mostrarInfo(pessoa);
