"use strict";
(() => {
    // const numeros: (string | number | boolean)[] = [1,2,3,4,5,6,7,'8'];
    // numeros.push('10');
    const numeros = [1, 2, 3, 4, 5, 6, 7];
    numeros.push(8);
    console.log(numeros);
    const losMalos = ['enemigo1', 'enemigo2', 'enemigo3'];
    // dentro del cilco TS ya sabe que las iteraciones sera tipo string
    losMalos.forEach(m => (console.log(m.toUpperCase())));
})();
//# sourceMappingURL=arrays.js.map