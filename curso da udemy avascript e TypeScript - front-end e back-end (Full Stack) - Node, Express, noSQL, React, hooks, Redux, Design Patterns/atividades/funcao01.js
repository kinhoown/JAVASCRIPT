// ESCREVA UMA FUNÇÃO QUE RECEBE 2 NUMEROS E RETORNE O MAIOR DELES.




function maior(n1, n2) {
    if (n1 > n2){
        return `${n1} é maior do que ${n2}`
    }else{
        return `${n2} é maior do que ${n1}`
    }
}

console.log(maior(100, 500))