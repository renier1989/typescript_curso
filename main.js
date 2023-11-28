"use strict";
(() => {
    const nombre = "Renier Vargas";
    console.log(nombre);
    const a = "hola mundo";
    let b = 4;
    function saludar(msg) {
        console.log(msg.toUpperCase());
    }
    saludar('Venezuela');
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["acuama"] = 0] = "acuama";
        FuerzaHeroes[FuerzaHeroes["batman"] = 1] = "batman";
        FuerzaHeroes[FuerzaHeroes["flash"] = 5] = "flash";
        FuerzaHeroes[FuerzaHeroes["superman"] = 100] = "superman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    const fuerzaFlash = FuerzaHeroes.flash;
    const fuerzaSuperman = FuerzaHeroes.superman;
    const fuerzaBatman = FuerzaHeroes.batman;
    const fuerzaAcuaman = FuerzaHeroes.acuama;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const sumar2 = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = 'sin señal') => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log('algo pasa aqui');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Renier', 'Vargas');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Renier', 'vargas', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Renier');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restoArgs) => {
        return `${firstName} ${restoArgs.join(' ')}`;
    };
    const nombrePersona = fullName("Renier", "Josue", "Vargas", "Mejias");
    console.log({ nombrePersona });
})();
(() => {
    const fnNumeros = (a, b) => a + b;
    const saludo = (name) => `Hola ${name}`;
    const mensajeDefault = () => `esto es un mensaje por defecto`;
    let myFunction;
    myFunction = mensajeDefault;
    console.log(myFunction());
    console.log(typeof (myFunction));
})();
(() => {
    const personaje = 'Dr. Manhathan';
    function retornarNombreHeroe() {
        return personaje;
    }
    const heroName = retornarNombreHeroe();
    console.log(typeof retornarNombreHeroe);
    const heroeActivo = () => {
        return 'algo';
    };
    const heroeActivo2 = () => {
        return 33;
    };
    const algo = heroeActivo2();
    console.log(typeof heroeActivo);
    console.log(typeof heroeActivo2);
})();
//# sourceMappingURL=main.js.map