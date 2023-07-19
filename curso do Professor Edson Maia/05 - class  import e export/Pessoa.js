



export class Pessoa {
    _nome
    _idade
    _sexo

    static totalPessoa = 0

    constructor (nome, idade, sexo){
        this._nome = nome
        this._idade = idade
        this._sexo = sexo
        Pessoa.totalPessoa += 1
    }

    get totalPessoa() {
        return Pessoa.totalPessoa
    }

    get nome(){
        return this._nome
    }

}