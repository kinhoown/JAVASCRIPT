/*


URL da api =   https://pokeapi.co

P/ SABER TODOS OS CAMINHO DE ONDE IMPRIMIR.


*/




var url = 'https://pokeapi.co/api/v2/pokemon/pikachu'


fetch(url, {
    method: 'GET'
})

.then((res) => res.json())

.then((data) => console.log(data.abilities[0].ability.url))