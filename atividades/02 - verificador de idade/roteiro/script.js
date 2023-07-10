function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('resposta')
    var sexo = document.getElementsByName('sexo')
    var idade = ano - fano.value
    var genero = ''
    var imagem = document.getElementById('imagem')


    if(fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO]: Verifique os dadnos e tente novamente!`)
    }else{
        
        if(sexo[0].checked){
            genero = `Homem`
        }else{
            genero = `Mulher`
        }
        res.innerHTML = `${genero} de ${idade}.`
    }


    switch(genero){
        case `Homem`:
            if(idade<6){
                imagem.src = './imagem/menino-ate-1.jpg'
            }else if(idade<18){
                imagem.src = './imagem/menino-ate-18.jpg'
            }else if(idade<40){
                imagem.src = './imagem/menino-ate-40.jpg'
            }else if(idade<120){
                imagem.src = './imagem/menino-ate-70.jpg'
            }else{
                imagem.src = './imagem/e-morreu.jpg'
                res.innerHTML = `${genero} de ${idade}. R.I.P`
            }
            break

        case `Mulher`:
            if(idade<6){
                imagem.src = './imagem/menina-ate-1.jpg'
            }else if(idade<18){
                imagem.src = './imagem/menina-ate-18.jpg'
            }else if(idade<40){
                imagem.src = './imagem/menina-ate-40.jpg'
            }else if(idade<120){
                imagem.src = './imagem/menina-ate-70.jpg'
            }else{
                imagem.src = './imagem/e-morreu.jpg'
                res.innerHTML = `${genero} de ${idade}. R.I.P`
            }
            break
    }
}