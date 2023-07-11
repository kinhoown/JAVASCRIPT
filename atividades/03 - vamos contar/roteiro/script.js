


function conta() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        for (inicio.value ; inicio.value < fim ; inicio.value =+ 1){
            res.innerHTML = inicio.value
        }
    }
}

