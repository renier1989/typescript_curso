"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["acuama"] = 0] = "acuama";
        FuerzaHeroes[FuerzaHeroes["batman"] = 1] = "batman";
        FuerzaHeroes[FuerzaHeroes["flash"] = 5] = "flash";
        FuerzaHeroes[FuerzaHeroes["superman"] = 100] = "superman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    // const fuerzaFlash = 5;
    // const fuerzaSuperman = 100;
    // const fuerzaBatman = 1;
    // const fuerzaAcuaman = 0;
    const fuerzaFlash = FuerzaHeroes.flash;
    const fuerzaSuperman = FuerzaHeroes.superman;
    const fuerzaBatman = FuerzaHeroes.batman;
    const fuerzaAcuaman = FuerzaHeroes.acuama;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
