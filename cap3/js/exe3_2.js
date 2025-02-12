function calculaPeso() {
    let inNome = document.getElementById("inNome");
    let inSexo1 = document.getElementById("inSexo1");
    let inSexo2 = document.getElementById("inSexo2");
    let inAltura  = document.getElementById("inAltura");

    let nome = inNome.value;
    let masculino = inSexo1.checked;
    let feminino = inSexo2.checked;
    let altura = Number(inAltura.value);
    let peso = 0;

    if (nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, preencha os campos solicitados...");
        inNome.focus();
        return;
    }

    if (nome == "" || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...")
        inAltura.focus();
        return;
    }

    if(masculino) {
        peso = 22 * Math.pow(altura, 2) ;

    } else {
        peso = 21 * Math.pow(altura, 2);

    }



    let outResultado = document.getElementById("outResultado");
    outResultado.textContent = nome + " Seu peso ideal é: " + peso.toFixed(3);
    

}

function limparDados() {
    document.getElementById("inNome").value = "";
    document.getElementById("inSexo1").checked = false;
    document.getElementById("inSexo2").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResultado").textContent = "";

}

let btnCalcularPeso = document.getElementById("btnCalcularPeso");
btnCalcularPeso.addEventListener("click", calculaPeso);

let btnLimparDados = document.getElementById("btnLimparDados");
 btnLimparDados.addEventListener("click", limparDados)