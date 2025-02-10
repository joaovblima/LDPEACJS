function mostrarValoresParcelas() {
    let inVeiculo = document.getElementById("inVeiculo");
    let inPreco = document.getElementById("inPreco");
    let outVeiculo = document.getElementById("outVeiculo");
    let outEntrada = document.getElementById("outEntrada");
    let outParcelas = document.getElementById("outParcelas")

    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);
    var entrada = preco * 0.50
    var parcelas = (preco * 0.50) / 12
    
    outVeiculo.textContent = "Promoção: "+ veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcelas.textContent = "12X Parcelas de R$ " + parcelas.toFixed(2);

}

let btPromocao = document.getElementById("btPromocao");

btPromocao.addEventListener("click", mostrarValoresParcelas)

