"use strict";
(() => {
    let heroes = 123;
    let existe;
    let poderes;
    heroes = 'algo';
    // no estan claros lo metos que se puedan usar si es de tipo any
    console.log(heroes.charAt(0));
    console.log(heroes[1]);
    console.log(heroes[10]);
    // una forma de castear e indicar un tipo
    console.log(heroes.concat(' Esta pasando?'));
    heroes = 433.12312;
    console.log(heroes.toFixed(2));
    console.log(heroes.toFixed(3));
    console.log(existe);
    console.log(poderes);
})();
