//função de q quando clicar gerar a imagem
function trocar(){
    var url = "https://dog.ceo/api/breeds/image/random" // variavel da url
    var img = document.getElementById('img') // variavel de onde vai ficar a imagem


//Buscar (a url[q nesse caso esta como variavel mas poderia ser ja URL direto], {metodo 'GET' q é o metodo de pegar algo dentro da url})
    fetch(url, {
        method: 'GET'
    })

//então((res = oq vai ser retornado) => res.json()) [to dizendo q o retorno dele é em .json]
    .then((res) => res.json())

//Quando eu digo q o retorno é em json ele me retorna um dado.
//então ((data) => img.src = data.message [com o dado em maões eu consigo acessar a messagem. {q nesse caso é .messagem pq no site da api diz q é addim. obs: sempre olhe o site q ele vai dizer oq acessar. tu é um programador não um adivinhador.}])
    .then((data) => img.src = data.message)
}