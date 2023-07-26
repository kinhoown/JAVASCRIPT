let digiteTarefa = document.querySelector('#digiteTarefa')
let botaoAdicionar = document.querySelector('#botaoAdicionar')

let tarefaConfirmada = document.querySelector('.tarefaConfirmada')
let tarefaConfirmadaunica = document.querySelectorAll('.tarefaConfirmadaUnica')
let botaoApagar = document.querySelector('.botaoApagar')

function limparInput(){
    digiteTarefa.value = ''
    digiteTarefa.focus()
}

botaoAdicionar.addEventListener('click', function(event){
    tarefaConfirmada.innerHTML += `
    <li class="tarefaConfirmadaUnica">${digiteTarefa.value}</li>
    <button class="botaoApagar">🗑️</button><br>
    `
    event.preventDefault()
    limparInput()
})

botaoApagar.addEventListener('click', function(event){
    const el = event.target
    console.log(el)
})
