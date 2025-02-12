function calcularHorario() {
    let inHora = document.getElementById("inHora");
    let outHoraNaFranca = document.getElementById("outHoraNaFranca");

    let horaBrasil = Number(inHora.value);

    if(inHora == "" || isNaN(horaBrasil)) {
        alert("Informe a hora do Brasil corretamente...");
        inHora.focus();
        return;
    }

    let horaFranca = horaBrasil + 5;

    if (horaFranca > 24) {
        horaFranca -= 24;

    }

    outHoraNaFranca.textContent = "Hora na França " + horaFranca.toFixed(2);
}

let btnExibirHora = document.getElementById("btnExibirHora");
btnExibirHora.addEventListener("click", calcularHorario);
