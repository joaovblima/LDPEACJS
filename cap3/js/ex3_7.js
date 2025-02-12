function calcularMulta() {
    let inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    let inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");

    let velocidadePermitida = Number(inVelocidadePermitida.value);
    let velicidadeCondutor = Number(inVelocidadeCondutor.value);
    let tipoDeMulta = "";

    if (velicidadeCondutor <=velocidadePermitida) {
        tipoDeMulta = "Sem Multa";
    }else if (velicidadeCondutor <= velocidadePermitida * 1.2) {
        tipoDeMulta = "Multa leve";
    } else {
        tipoDeMulta = "Multa grave";
    }

    let outSituacaoMulta = document.getElementById("outSituacaoMulta");
    outSituacaoMulta.textContent = "Situação: "+ tipoDeMulta

}

let btnVerificaVelocidade = document.getElementById("btnVerificaVelocidade");
btnVerificaVelocidade.addEventListener("click", calcularMulta);