/*
ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNE O SEGUINTE:
NÚMERO É DIVISIVEL POR 3 = Fizz.
NÚMERO É DIVISIVEL POR 5 = Buzz.
NÚMERO É DIVISIVEL POR 3 E 5 = FizzBuzz.
NÚMERO NÃO É DIVISIVEL POR 3 E 5 = Retorna o proprio número.
CHECAR SE O NÚMERO É REALMENTE UM NÚMERO E SE NAO FOR UM NUMERO RETORNA O PROPRIO NÚMERO.
USE A FUNÇÃO COM NÚMEROS DE 0 A 100.
*/


function divisivel(n){
    if (n % 3 === 0 && n % 5 === 0){
        console.log('FizzBuzz')
    }else if (n % 3 === 0){
        console.log('Fizz')
    }else if (n % 5 === 0){
        console.log('Buzz')
    }else{
        console.log(n)
    }
}
for (let num = 0; num <= 100; num++){
    divisivel(num)
}