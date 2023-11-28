"use strict";
(() => {
    const personaje = 'Dr. Manhathan';
    function retornarNombreHeroe() {
        return personaje;
    }
    const heroName = retornarNombreHeroe();
    console.log(typeof retornarNombreHeroe);
    const heroeActivo = () => {
        return 'algo';
    };
    const heroeActivo2 = () => {
        return 33;
    };
    const algo = heroeActivo2();
    console.log(typeof heroeActivo);
    console.log(typeof heroeActivo2);
})();
//# sourceMappingURL=functions.js.map