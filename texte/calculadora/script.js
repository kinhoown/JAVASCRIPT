let cont = 0
document.addEventListener('click', (e) => {
    const res = document.querySelector('.resposta')
    const el = e.target

    console.log(cont)
    if (el.classList.contains('numeros')){
        console.log(cont)
        cont += el.value
        res.innerHTML += el.value
        console.log(Number(cont))
    }else if (el.classList.contains('operadores')){

    }else if (el.classList.contains('limpar')){

    }else if (el.classList.contains('apagar')){

    }else if (el.classList.contains('resultado')){

    }else if (el.classList.contains('virgula')){

    }
})
