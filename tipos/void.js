"use strict";
(() => {
    function sinNada() {
    }
    function sinNadaMas() {
        console.log('salio algo de aqui');
        return;
    }
    const vacio = () => {
        console.log('algo vacio');
    };
    const algo = sinNada();
    console.log(algo);
    const algomas = sinNadaMas();
    console.log(algomas);
    vacio();
})();
//# sourceMappingURL=void.js.map