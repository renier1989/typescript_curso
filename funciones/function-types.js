"use strict";
(() => {
    const fnNumeros = (a, b) => a + b;
    const saludo = (name) => `Hola ${name}`;
    const mensajeDefault = () => `esto es un mensaje por defecto`;
    let myFunction;
    myFunction = mensajeDefault;
    console.log(myFunction());
    console.log(typeof (myFunction));
})();
//# sourceMappingURL=function-types.js.map