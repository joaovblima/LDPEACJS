function calcularRaiz() {
    let inNumero = document.getElementById("inNumero");
    let outExibirRaiz = document.getElementById("outExibirRaiz");

    let numero = Number(inNumero.value);

    if(isNaN(numero) || numero < 0) {
        outExibirRaiz.textContent= "Informe um número válido e positivo..."
        inNumero.focus();
        return;
    }
    let raiz = Math.sqrt(numero);

    if(!Number.isInteger(raiz)) {
        outExibirRaiz.textContent = "Não há raiz exata para "+ numero;
    } else {
        outExibirRaiz.textContent = "A raiz de "+ numero + " é: "+ raiz;
    }
}

let btnExibirRaizQuadrada = document.getElementById("btnExibirRaizQuadrada");
btnExibirRaizQuadrada.addEventListener("click", calcularRaiz); 