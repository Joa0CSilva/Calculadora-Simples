'use strict'

const botaoSoma = document.getElementById('soma')

function somar () {
    const num1 = Number(document.getElementById('numero-digitado-um').value)
    const num2 = Number(document.getElementById('numero-digitado-dois').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 + num2
}


botaoSoma.onclick = somar