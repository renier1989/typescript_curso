"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    // indica que la funcion fullName espera 2 argumentos pero el lastName puede enviarse o no y que sean del tipo esperado string
    const name = fullName('Renier');
    console.log({ name });
})();
//# sourceMappingURL=args_optional.js.map