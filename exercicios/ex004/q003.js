var textoNormal = 'Olá, Mundo!';

function inverterString(s) {
    let tamanhoDaString = s.length;
    let textoInvertido = '';
    for (let i = tamanhoDaString - 1; i >= 0; i--) {
        textoInvertido += s[i];
    }
    console.log(textoInvertido);
    return;
}

inverterString(textoNormal);
