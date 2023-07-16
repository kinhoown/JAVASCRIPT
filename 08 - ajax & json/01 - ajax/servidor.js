/*
Para tudo funcionar antes temos q instalar 2 pacotes.

Pacote - 01 : npm init -y
Pacote - 02 : npm intall express

Agora é so correr pro abraço.
*/




const express = require('express')
const path = require('path')
const server = express()
const router = express.Router()
const port = 8000


//Puxar as paginas p/ esse servidor.
router.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.use(router)

//PARA AVISAR QUE O SERVIDOR FOI LIGADO.
server.listen(port , ()=>{
    //Para ligar o servidor digite: node servidor.js
    console.log('Servidor iniciado com sucesso')
    console.log('Para desligar o servidor: Ctrl + c .')
})
