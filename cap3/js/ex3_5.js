function calcularNotas() {
    let inValorSaque = document.getElementById("inValorSaque");
    let outNotasDeCem = document.getElementById("outNotasDeCem");
    let outNotasDeCinquenta = document.getElementById("outNotasDeCinquenta");
    let outNotasDeDez = document.getElementById("outNotasDeDez");

    let saque = Number(inValorSaque.value);
    
    if (saque == 0 || isNaN(saque)) {
        alert("Informe o valor do aque corretamente...")
        inValorSaque.focus();
        return;
    }

    if(saque % 10 != 0){
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100");
        inValorSaque.focus();
    }

    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notasDez = Math.floor(resto / 10);
    resto = resto % 10;

    if (notasCem > 0) {
        outNotasDeCem.textContent = "Notas de R$ 100: "+ notasCem;
    }

    if(notasCinquenta > 0) {
        outNotasDeCinquenta.textContent = "Notas de R$ 50: "+ notasCinquenta;
    }

    if(notasDez > 0) {
        outNotasDeDez.textContent = "Notas de R$ 10: " + notasDez;
    }
}

let btnExibirNotas = document.getElementById("btnExibirNotas");
btnExibirNotas.addEventListener("click", calcularNotas);