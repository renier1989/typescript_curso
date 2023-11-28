"use strict";
(() => {
    let miVariablePersonalizada = 'Renier Vargas';
    console.log({ miVariablePersonalizada }, typeof (miVariablePersonalizada));
    miVariablePersonalizada = 3423542;
    console.log({ miVariablePersonalizada }, typeof (miVariablePersonalizada));
    miVariablePersonalizada = {
        nombre: 'nombre diferente',
        edad: 33,
        poderes: []
    };
    console.log({ miVariablePersonalizada }, typeof (miVariablePersonalizada));
})();
