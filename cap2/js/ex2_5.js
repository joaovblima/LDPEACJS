function mostrarPromocao() {
    let inMedicamento = document.getElementById("inMedicamento");
    let inPreco = document.getElementById("inPreco");
    let outMedicamento = document.getElementById("outMedicamento");
    let outPreco = document.getElementById("outPreco");

    let medicamento = inMedicamento.value;
    let preco = Number(inPreco.value);
    let desconto = Math.floor(preco);

    outMedicamento.textContent = "Promoção de " + medicamento;
    outPreco.textContent = "Leve 2 por apenas R$ " + (desconto * 2).toFixed(2);

}

let btnPromocao = document.getElementById("btnPromocao");
btnPromocao.addEventListener("click", mostrarPromocao);