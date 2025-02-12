function verificaPar() {
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    let numero = Number(inNumero.value);

    if (numero % 2 ==0 ) {
        outResposta.textContent = "Resposta: "+ numero +" é par.";
    } else {
        outResposta.textContent = "Resposta: "+ numero +" é impar.";
    }
}

let btnVerifica = document.getElementById("btnVerifica");
btnVerifica.addEventListener("click", verificaPar)