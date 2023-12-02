import { getPokemon } from "./generics/get-pokemon";


getPokemon(23)
.then(pokemon => console.log(pokemon.sprites.front_default))
.catch(error => console.error(error))
.finally(()=>console.log('fin del getPokemon'))