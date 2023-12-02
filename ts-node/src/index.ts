import { PersonajeStarwars } from "./decorators/starwars";


const personaje = new PersonajeStarwars('Padme Amidala');
// const au = personaje.autor = 'hola' // aunque TS se queda y nos advierte que es una propiera privada, en JS si se puede modificar

personaje.autor = 'Renier Vargas'
console.log(personaje);

// personaje.nombre = 'Maul'
// PersonajeStarwars.prototype.nombre = 'Maul'
// (PersonajeStarwars.prototype as any).customName =  'algo mas';
// console.log(personaje);

// personaje.saveDataInDB(3);
// personaje.saveDataInDB(1000);
