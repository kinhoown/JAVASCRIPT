class Pessoa {
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

let pessoa1 = new Pessoa('Erick Alexandre Pessoa de Lima', 25, 'Masculino')
let pessoa2 = new Pessoa('Livia Albuquerque Ribeiro', 21, 'Feminino')

console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(Pessoa.totalPessoa)