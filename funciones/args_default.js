"use strict";
(() => {
    // no se pueden declarar argumentos despues de argumentos opcionales a menos que sean por defecto
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    // indica que la funcion fullName espera 2 argumentos pero el lastName puede enviarse o no y que sean del tipo esperado string
    const name = fullName('Renier', 'vargas', true);
    console.log({ name });
})();
