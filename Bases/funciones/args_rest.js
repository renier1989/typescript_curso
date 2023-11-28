"use strict";
(() => {
    // esto es para el resto de los argumentos que quiero que sea opcionales
    // el resto de los argumentos es tratado como un arreglo
    const fullName = (firstName, ...restoArgs) => {
        return `${firstName} ${restoArgs.join(' ')}`;
    };
    const nombrePersona = fullName("Renier", "Josue", "Vargas", "Mejias");
    console.log({ nombrePersona });
})();
