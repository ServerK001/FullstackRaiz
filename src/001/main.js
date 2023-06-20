/**
 * [Aula #10/#11/#12 - Normalização de dados]
 * Regas de normalização
 * 1° Colocar como chave  um identificador  para  acesso rápido
 * 2° Desaninhar os cardapios do restaurante [..., resturante, cardapio, sessão, itens]
 * 
 */

import data from './data/restaurants.js'



//* 1° Colocar como chave  um identificador  para  acesso rápido
    const restaurantes = new Map(
        data.map( (restaurants)=> [restaurants.id, restaurants])
        );
// ? [restaurante.id, restaurante] retorna o id e o array completo

// TODO: pegando dados de restautante usando o get do new Map
console.log(restaurantes.get('3f231724-6def-4919-b66d-d0ec70c2045f'))

const menus = new Map (
    data.map( (restaurantes) => restaurantes.menus.map( (menus)=> [menus.id, menus] ))
) // [id:{id:123, name:'mikael}]
// ! Tem um map dentro de outro map, para conseguir pegar o menu e colocalo no new Map

const menus2 = new Map (data.map( (restaurantes)=> restaurantes.menus.map( (menus)=> [menus.id, menus]) ))