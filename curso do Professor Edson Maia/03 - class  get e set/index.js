class Pessoa {
    _nome
    _idade
    _sexo

    constructor (nome, idade, sexo){
        this._nome = nome
        this._idade = idade
        this._sexo = sexo
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

}

let pessoa1 = new Pessoa('Erick Alexandre Pessoa de Lima', 25, 'Masculino')

console.log(pessoa1.nome)
console.log(pessoa1.nome = 'THOR')