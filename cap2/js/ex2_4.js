function calculaPreço() {
    let inPrecoPorQuilo = document.getElementById("inPrecoPorQuilo");
    let inConsumoPorGramas = document.getElementById("inConsumoPorGramas");
    let outValorPagar = document.getElementById("outValorPagar");

    let preco = Number(inPrecoPorQuilo.value);
    let gramasConsumidas = Number(inConsumoPorGramas.value);
    
    let precoPorGrama = preco / 1000;
    let precoAPagarPorGramasConsumidas = precoPorGrama * gramasConsumidas;

    outValorPagar.textContent = "Valor a pagar R$ " + precoAPagarPorGramasConsumidas.toFixed(2);
    
}

let btnCalcularPreco = document.getElementById("btnCalcularPreco");
btnCalcularPreco.addEventListener("click", calculaPreço);