function calcularPromocao() {
    let inProduto = document.getElementById("inProduto");
    let inPreco = document.getElementById("inPreco");

    let produto = inProduto.value;
    let preco = Number(inPreco.value);
    let precoPromocional = preco * 0.5;
    let valorTotal = (preco * 2) + precoPromocional;

    let outPromocao = document.getElementById("outPromocao");
    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$ "+ valorTotal.toFixed(2);

    let outPreco = document.getElementById("outPreco");
    outPreco.textContent = "O terceiro produto custa apenas R$ "+ precoPromocional.toFixed(2);
}

let btnCalculaPromocao = document.getElementById("btnCalculaPromocao");
btnCalculaPromocao.addEventListener("click", calcularPromocao);