"use strict";
(() => {
    const fullName = (firstName, ...restoArgs) => {
        return `${firstName} ${restoArgs.join(' ')}`;
    };
    const nombrePersona = fullName("Renier", "Josue", "Vargas", "Mejias");
    console.log({ nombrePersona });
})();
//# sourceMappingURL=args_rest.js.map