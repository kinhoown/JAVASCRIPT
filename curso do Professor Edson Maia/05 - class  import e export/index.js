

import {Pessoa} from './Pessoa.js'

let pessoa1 = new Pessoa('Erick Alexandre Pessoa de Lima', 25, 'Masculino')
let pessoa2 = new Pessoa('Livia Albuquerque Ribeiro', 21, 'Feminino')

console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(Pessoa.totalPessoa)