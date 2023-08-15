var input = document.getElementById("input")
var num = document.getElementById("num")

function contar(){
    var texto = input.value
    var carac = texto.length
    num.textContent = ` ${carac} caracteres `
}

