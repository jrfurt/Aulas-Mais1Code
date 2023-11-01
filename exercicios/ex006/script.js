const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = [...document.querySelectorAll('.res')];
const mostrador = document.querySelector('.mostrador');
const treset = document.getElementById('treset');
const tigual =  document.getElementById('tigual');

let decimal = false;
let sinal = false;

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false;
        if (evt.target.innerHTML == '.') {
            if (!decimal) {
                decimal = true;
                if (mostrador.innerHTML == '0') {
                    mostrador.innerHTML = '0.';
                } else {
                    mostrador.innerHTML += evt.target.innerHTML;
                }
            }
        }
        else {
            if (mostrador.innerHTML == '0') {
                mostrador.innerHTML = '';
            }
            mostrador.innerHTML += evt.target.innerHTML;
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true;
            if (mostrador.innerHTML == '0') {
                mostrador = '';
            }
            else {
                mostrador.innerHTML += evt.target.innerHTML;
            }
        }
    })
})

treset.addEventListener('click', (evt) => {
    mostrador.innerHTML = '0';
    sinal = false;
    decimal = false;
})

tigual.addEventListener('click', (evt) => {
    decimal = false;
    sinal = false;
    const res = eval(mostrador.innerHTML);
    mostrador.innerHTML = res;
})
