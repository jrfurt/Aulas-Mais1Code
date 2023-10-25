var pessoas = [
    {
        nome: "Gracimar",
        idade: 25
    }, {
        nome: "Mahalo",
        idade: 22
    }, {
        nome: "Lucas",
        idade: 34
    }, {
        nome: "Jurandir",
        idade: 29
    }, {
        nome: "Priscila",
        idade: 28
    },
]

pessoas.sort(function ordenarObjetos(a, b) {
    return a.idade - b.idade;
})

console.log(pessoas);
