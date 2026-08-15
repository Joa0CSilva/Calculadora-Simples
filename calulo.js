'use strict'

//Soma
const botaoSoma = document.getElementById('soma')

function somar () {
    const num1 = Number(document.getElementById('numero-digitado-um').value)
    const num2 = Number(document.getElementById('numero-digitado-dois').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 + num2
}


botaoSoma.onclick = somar


//Subtração
const botaoSubtracao = document.getElementById('subtracao')

function subtrair () {
    const num1 = Number(document.getElementById('numero-digitado-um').value)
    const num2 = Number(document.getElementById('numero-digitado-dois').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 - num2
}


botaoSubtracao.onclick = subtrair


//Multiplicação
const botaoMultiplicacao = document.getElementById('multiplicacao')

function multiplicar () {
    const num1 = Number(document.getElementById('numero-digitado-um').value)
    const num2 = Number(document.getElementById('numero-digitado-dois').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 * num2
}


botaoMultiplicacao.onclick = multiplicar


//Divisão
const botaoDivisao = document.getElementById('divisao')

function dividir () {
    const num1 = Number(document.getElementById('numero-digitado-um').value)
    const num2 = Number(document.getElementById('numero-digitado-dois').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 / num2
}


botaoDivisao.onclick = dividir