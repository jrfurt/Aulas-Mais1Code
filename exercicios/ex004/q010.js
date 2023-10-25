var numeroX = 97;

function verificarPrimo(x) {
    let numeroDeDivisores = 0;
    let primo;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            numeroDeDivisores++;
        }
    }
    if (numeroDeDivisores == 2) {
        primo = true;
        console.log('Verdadeiro');
        return;
    } else {
        primo = false;
        console.log('Falso');
        return;
    }
}

verificarPrimo(numeroX);
