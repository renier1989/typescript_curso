"use strict";
(() => {
    // es cuando algo no va a funcionar o no retorna algo que se pueda usar
    // por lo tanto la ejecucion termina
    let numero = 1;
    const estoPasa = (mensaje) => {
        if (numero == 2) {
            throw new Error(mensaje);
        }
        console.log("continua la ejecucion");
        return true;
    };
    estoPasa("esto es un error");
    let numero2 = 1;
    const nuncaPasa = (mensaje) => {
        if (numero2 == 1) {
            throw new Error(mensaje);
        }
        console.log("continua la ejecucion 2");
        return true;
    };
    nuncaPasa("esto es un error , nunca pasa ");
    //   ya la ejecucion no continuar ni llega hasta aqui
    const error = () => {
        throw new Error("ERROR");
    };
    error();
})();
//# sourceMappingURL=never.js.map