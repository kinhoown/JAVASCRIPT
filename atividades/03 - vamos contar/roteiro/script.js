var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function contar(){
    res.innerHTML = `${inicio.value} ${fim.value} ${passo.value}`
}

