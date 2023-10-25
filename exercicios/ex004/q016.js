var celular = {
    marca: "Samsung",
    modelo: "S23",
    ano: 2023,
    cor: "preto",
}

function contarPropriedades(obj) {
    let numeroDePropriedades = 0;
    for (let i in obj) {
        numeroDePropriedades++;
    }
    
    return numeroDePropriedades;
}

var numDeProps = contarPropriedades(celular);
console.log(`O objeto possui ${numDeProps} propriedades.`);
