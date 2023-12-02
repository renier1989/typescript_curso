import { getPokemon } from "./generics/get-pokemon";


getPokemon(23)
.then(res => console.log(res))
.catch(error => console.error(error))
.finally(()=>console.log('fin del getPokemon'))