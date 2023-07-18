



function conta() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = `Contando: `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
            for (var c = i ; c <= f ; c += p){
                res.innerHTML += `${c} &#128073;`
            }
        
        }else{
            for (var c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} &#128073;`
            }
        res.innerHTML += `&#129313;`
    }
}

}