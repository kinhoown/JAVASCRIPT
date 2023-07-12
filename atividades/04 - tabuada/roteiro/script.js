function verificar(){
    var numero = document.querySelector('#numero')
    var num = Number(numero.value)
    var operacao = document.getElementById('operacao')
    var ope = operacao.value
    var res = document.querySelector('#resultado')

    switch (ope){
        case '+':
            for(var valor = 0; valor <10; valor += 1){
                res.innerHTML += `${valor} + ${num} = ${valor + num}` + "<br> <br>"
            }
            break
        
        case '-':
            for(var valor = 1; valor <=10; valor += 1){
                res.innerHTML += `${valor} - ${num} = ${valor - num}` + "<br> <br>"
            }
            break

        case '*':
            for(var valor = 1; valor <=10; valor += 1){
                res.innerHTML += `${valor} X ${num} = ${valor * num}` + "<br> <br>"
            }
            break

        case '/':
            for(var valor = num; valor <= num * 10; valor += num){
                res.innerHTML += `${valor} : ${num} = ${valor / num}` + "<br> <br>"
            }
            break
    }
}
