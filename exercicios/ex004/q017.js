var aluno = {
    nome: "Nickerzinn",
    notas: [8, 5, 9, 6],
    calcMedia: function() {
        let numDeNotas = this.notas.length;
        let somaDasNotas = 0;
        for (let i = 0; i < numDeNotas; i++) {
            somaDasNotas += this.notas[i];
        }

        let media = somaDasNotas / numDeNotas;
        return media;
    }
}

console.log(`A média do aluno ${aluno.nome} é ${aluno.calcMedia()}.`);
