var texto = 'a minha frase preferida';

function contarVogais(s) {
    let contador = 0;
    let vogais = 'aeiou';
    let tamanhoDaString = s.length;
    for (let i = 0; i < tamanhoDaString; i++) {
        for (let j = 0; j < 5; j++) {
            if (s[i] == vogais[j]) {
                contador++;
            }
        }
    }

    console.log(`O texto digitado tem ${contador} vogais.`);
    return;
}

contarVogais(texto);