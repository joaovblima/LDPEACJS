function calcularValorPagar() {
    let inValor = document.getElementById("inValor");
    let inTempo = document.getElementById("inTempo");

    let valor = Number(inValor.value);
    let tempo = Number(inTempo.value);
    let calcularInteiro = Math.ceil(tempo / 15);
    let valorTotal = calcularInteiro * valor;


    let outValorPagar = document.getElementById("outValorPagar");
    outValorPagar.textContent = "Valor a pagar R$: " + valorTotal.toFixed(2);

}

let btnCalcularValor = document.getElementById("btnCalcularValor");
btnCalcularValor.addEventListener("click", calcularValorPagar);