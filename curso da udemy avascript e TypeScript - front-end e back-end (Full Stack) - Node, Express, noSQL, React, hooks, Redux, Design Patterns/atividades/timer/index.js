
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')
let res = document.querySelector('.timer')
let segundos = 0

let tempo = setInterval(function() {
    res.innerHTML = segundos
    segundos++
}, 1000)

iniciar.addEventListener('click', function(){
    
})

pausar.addEventListener('click', function(){
    setTimeout(function(tempo){
        clearInterval()
    }, 1000)
})

zerar.addEventListener('click', function(){
    res.innerHTML = 'zerou'
})