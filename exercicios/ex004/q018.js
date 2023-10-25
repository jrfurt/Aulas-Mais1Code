var notebook = {
    marca: "Lenovo",
    modelo: "Ideapad 3",
    memoriaRAM: "8GB",
    memoriaSSD: "256GB",
}

function clonarObjeto(obj) {
    let clone = Object.assign({}, obj);
    return clone;
}

var objClone = clonarObjeto(notebook);
console.log(objClone);
