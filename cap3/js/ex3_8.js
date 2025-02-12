function calcularTroco() {
    let inValor = document.getElementById("inValor");
    let outTempo = document.getElementById("outTempo");
    let outTroco = document.getElementById("outTroco");

    let valor = Number(inValor.value);
    let tempoEmMinutos = 0;
    let troco = 0;

    switch (valor) {
        case 1:
            tempoEmMinutos = 30;
            break;
        case valor == 1.75:
            tempoEmMinutos = 60;
            break;
        case 3:
            tempoEmMinutos = 120;
            break;
        case 2:
            tempoEmMinutos = 60;
            troco = 0.25;
            
            alert("Valor insuficiente.")
            break
        default:
            alert("Valor inválido, tente novamente...")
            break;
    }
}