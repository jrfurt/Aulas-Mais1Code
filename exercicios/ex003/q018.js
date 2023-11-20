var nomes = ['Edivaldo', 'Aristides', 'Ana', 'Maria', 'Jonas'];
let nomeEspecifico = 'Clara';
let achei = false;

for (let nome of nomes) {
    if (nome == nomeEspecifico) {
        achei = true;
    }
}

if (achei == true) {
    console.log(`O nome ${nomeEspecifico} está na lista.`)
} else {
    console.log(`O nome ${nomeEspecifico} não está na lista.`)
}
