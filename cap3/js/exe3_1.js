function calcularMedia() {
    let inNomeAluno = document.getElementById("inNomeAluno");
    let inPrimeiraNota = document.getElementById("inPrimeiraNota");
    let inSegundaNota = document.getElementById("inSegundaNota");

    let nomeAluno = inNomeAluno.value
    let primeira = Number(inPrimeiraNota.value);
    let segunda = Number(inSegundaNota.value);
    let media = (primeira + segunda)/2;

    let outMediaDeNotas = document.getElementById("outMediaDeNotas");
    outMediaDeNotas.textContent = "Média das Notas: " + media.toFixed(1);
    let situacao = document.getElementById("situacao");
    if (media >=7.0) {
        situacao.textContent = "Parabens," + nomeAluno + " você foi aprovado(a)";
        situacao.style.color = "blue";
    } else {
        situacao.textContent = "Ops... " + nomeAluno + " você foi reprovado(a)";
        situacao.style.color = "red";
    }
}

let btnExibirMedia = document.getElementById("btnExibirMedia");
btnExibirMedia.addEventListener("click", calcularMedia);