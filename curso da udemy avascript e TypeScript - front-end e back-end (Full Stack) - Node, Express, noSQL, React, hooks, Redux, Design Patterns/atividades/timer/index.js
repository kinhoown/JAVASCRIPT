
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')
let res = document.querySelector('.timer')
let sec = 0
let timer

function hora(sec){
    let data = new Date(sec * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciarTimer(){
    timer = setInterval(function() {
        sec++
        res.innerHTML = hora(sec)
    }, 1000)

    res.style.color = 'darkred'
}

function pausarTimer(){
    setTimeout(function(){
        clearInterval(timer)
    }, 0)
}

function zerarTimer(){
    setTimeout(function(){
        clearInterval(timer)
    }, 0)
    sec = 0
    res.innerHTML = '00:00:00'
}

iniciar.addEventListener('click', function(){
    iniciarTimer()
})

pausar.addEventListener('click', function(){
    pausarTimer()
})

zerar.addEventListener('click', function(){
    zerarTimer()
})