let digiteTarefa = document.querySelector('#digiteTarefa')
let botaoAdicionar = document.querySelector('#botaoAdicionar')

let tarefaConfirmada = document.querySelectorAll('.tarefaConfirmada')
let botaoApagar = document.querySelectorAll('.botaoApagar')

botaoAdicionar.addEventListener('click', function(event){
    tarefaConfirmada[0].innerHTML += `
    <li class="tarefaConfirmada">erick</li>
    <button class="botaoApagar">🗑️</button>
    `
    event.preventDefault()
})
