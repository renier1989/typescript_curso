"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const algunosDatos = {
        heroe1: 'Spiderman',
        heroe2: 'Superman',
        activo: true,
        edad: 33,
        cargarInformacio() {
            return this.activo ? this.heroe1 : this.heroe2;
        }
    };
    const printDatos = (_a) => {
        var { heroe1 } = _a, resto = __rest(_a, ["heroe1"]);
        console.log(heroe1.toUpperCase(), resto);
    };
    printDatos(algunosDatos);
    const informacionArrglo = ['Renier Vargas', 44, 23423.3, false];
    const [nombre, edad, peso,] = informacionArrglo;
    console.log({ edad, peso, nombre }, nombre.toUpperCase());
})();
//# sourceMappingURL=main.js.map