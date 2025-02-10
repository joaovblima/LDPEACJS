function mostrarConversao() {
    let nomeFilme = document.getElementById("titulo").value;
    document.getElementById("resposta").textContent = nomeFilme;
    
    let minutagem = Number(document.getElementById("tempo").value);
    let horas = Math.floor(minutagem / 60);
    let minutos = minutagem % 60;
    document.getElementById("conversao").textContent = horas + " hora(s) " + minutos + " minuto(s)";

}

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarConversao);