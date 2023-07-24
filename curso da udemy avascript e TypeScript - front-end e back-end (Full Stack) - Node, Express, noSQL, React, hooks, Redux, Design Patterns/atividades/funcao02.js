/*
ESCREVA UMA FUNÇÃO CHAMADA ePaisagem QUE RECEBE DOIS ARGUMENTOS, LARGURA E ALTURA DA UMA IMAGEM (Number).
RETORNE TRUE SE A IMGEM ESTIVER NO MODO PAISAGEM.
*/

const ePaisagem = (altura, largura) => altura > largura ? false : true
console.log(ePaisagem(300, 500))