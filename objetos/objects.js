"use strict";
(() => {
    let superHeroe = {
        nombre: 'Bruce Wayne',
        alias: 'Batman',
        edad: 30,
        poderes: ['Inteligencia', 'Millonario']
    };
    superHeroe = {
        nombre: 'Clark Kent',
        edad: 33,
        poderes: ['Vision RayosX', 'Super Fuerza'],
        getNombre() {
            return this.nombre;
        }
    };
    let superVillano = {
        nombre: 'Carciller Palpatine',
        alias: 'Lord Sidiuos',
        edad: 80,
        poderes: ['Rayos de la fuerza', 'Controla la republica']
    };
})();
//# sourceMappingURL=objects.js.map