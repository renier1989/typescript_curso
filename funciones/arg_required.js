"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    // indica que la funcion fullName espera 2 argumentos y que sean del tipo esperado string
    const name = fullName('Renier', 'Vargas');
    console.log({ name });
})();
//# sourceMappingURL=arg_required.js.map