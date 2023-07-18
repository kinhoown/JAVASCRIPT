var horario = new Date()
var hora = horario.getHours()
var minuto = horario.getMinutes()
var tela = document.getElementById('hr')
var imagem = document.getElementById('imagem')
tela.innerHTML = `Agora são ${hora}:${minuto}.`

if(hora > 5 && hora < 12){
    imagem.src = './imagem/manha.jpg'
    document.body.style.background = '#dff8a5'
}else if(hora < 18){
    imagem.src = './imagem/tarde.jpg'
    document.body.style.background = '#eebb30'
}else{
    imagem.src = './imagem/noite.jpg'
    document.body.style.background = '#151a4b'
}