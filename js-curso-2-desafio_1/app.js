//título
let titulo = document.querySelector("h1");
titulo.innerText = "Hora do Desafio";

//console
function escreverConsole() {
    console.log("O botão foi clicado");
}

//alerta
function alertar() {
    alert("Eu amo JS");
}

//prompt
function perguntar() {
    let cidade = prompt ("Fale uma cidade do Brasil");
    alert (`eu estive em ${cidade} e lembrei de você`);
}

//soma
function somar() {
    let primeiroNumero = parseInt(prompt ("Digite um número"));
    let segundoNumero = parseInt(prompt ("Digite outro número"));
    let resultado = (primeiroNumero) + (segundoNumero);
    alert (`O resultado de ${primeiroNumero} + ${segundoNumero} é ${resultado}`);
}