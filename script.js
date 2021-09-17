
let infoButtonEl = document.getElementById("info-button");
let infoEl = document.getElementById("info");

infoButtonEl.addEventListener("mouseover", () => {
    infoEl.style.visibility = "visible";
});
infoButtonEl.addEventListener("mouseout", () => {
    infoEl.style.visibility = "hidden";
});
infoEl.addEventListener("mouseover", () => {
    infoEl.style.visibility = "visible";
});
infoEl.addEventListener("mouseout", () => {
    infoEl.style.visibility = "hidden";
});

let setaEl = document.getElementById("seta-conversao");
let inicioEl = document.getElementById("inicio");
let fimEl = document.getElementById("fim");
let moedaInicioEl = document.getElementById("moeda-inicio");
let moedaFimEl = document.getElementById("moeda-fim");
let entradaEl = document.getElementById("entrada");
let resultadoEl = document.getElementById("resultado");
let resultado;

setaEl.addEventListener("click", () => {
    let aux = inicioEl.innerHTML;
    inicioEl.innerHTML = fimEl.innerHTML;
    fimEl.innerHTML = aux;
    moedaInicioEl.innerHTML = inicioEl.innerHTML;
    moedaFimEl.innerHTML = fimEl.innerHTML;
    entradaEl.value = "";
    resultadoEl.innerHTML = "Valor em " + moedaFimEl.innerHTML + " (aproximado): ";
});

function formataMoeda(valor, moeda) {
    valor += "";
    valor = valor.split(".,")[0];
    if(moeda == "réis" && valor.lenght > 3) {
        for(let i = valor.lenght - 4; i > 0; i-=3) {
            valor[i]
        }
    }
    else if(moeda == "reais") {

    }
}

entradaEl.addEventListener("change", () => {
    if(inicioEl.innerHTML == "reais") {
        resultado = Math.round(entradaEl.value / 0.123);
        resultadoEl.innerHTML = "Valor em " + fimEl.innerHTML + " (aproximado): " + resultado;
    }
    else {
        resultado = Math.round(entradaEl.value * 0.123);
        resultadoEl.innerHTML = "Valor em " + moedaFimEl.innerHTML + " (aproximado): " + resultado;
    }
});