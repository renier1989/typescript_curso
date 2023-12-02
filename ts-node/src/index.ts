import { PersonajeStarwars } from "./decorators/starwars";


const personaje = new PersonajeStarwars('Padme Amidala');
// console.log(personaje);


// personaje.nombre = 'Maul'
PersonajeStarwars.prototype.nombre = 'Maul'
// (PersonajeStarwars.prototype as any).customName =  'algo mas';

console.log(personaje);
