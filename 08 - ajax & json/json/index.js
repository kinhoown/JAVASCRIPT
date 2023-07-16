var usuario = {
    nome: 'Erick',
    nickName: 'bola',
    idade: 25,
    senha: '1234qwer',
}


var TransfomarEmJSON = JSON.stringify(usuario)
console.log(TransfomarEmJSON)


var ReceberEmJSON = JSON.parse(TransfomarEmJSON)
console.log(ReceberEmJSON)