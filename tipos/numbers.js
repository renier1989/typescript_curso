"use strict";
(() => {
    let losBuenos = 10;
    console.log({ losBuenos });
    let losMalos = 40;
    console.log({ losMalos });
    if (losBuenos < losMalos) {
        console.log('Perdimos la batalla');
    }
    else {
        console.log('Ganamos la batalla');
    }
    losBuenos = Number('33dd');
    console.log(losBuenos); // -> NaN esto es considerado como un numero
})();
//# sourceMappingURL=numbers.js.map