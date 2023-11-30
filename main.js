"use strict";
(() => {
    class Mutante {
        constructor(nombre, rol) {
            this.nombre = nombre;
            this.rol = rol;
        }
    }
    class Bueno extends Mutante {
        salvar() {
            return `${this.nombre} tiene que salvar personas`;
        }
    }
    class Malo extends Mutante {
        destruir() {
            return `${this.nombre} tiene que destruir cosas`;
        }
    }
    const ciclope = new Bueno('Ciclope', 'Bueno');
    const magneto = new Malo('Magneto', 'Malo');
    console.log(ciclope);
    console.log(magneto);
    console.log(ciclope.salvar());
    console.log(magneto.destruir());
    const printName = (personaje) => {
        console.log(`${personaje.nombre}`);
    };
    printName(ciclope);
    printName(magneto);
})();
(() => {
    class Personaje {
        static getAvgAge() {
            return `${this.name} - ${this.age}`;
        }
        constructor(name, team = "texto opcional", realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Personaje.age = 33;
    const antman = new Personaje("AntMan", "Vengadores");
})();
(() => {
    class Hero {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("esto es el contructor Hero");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
        get fullName() {
            return `algo desde el get : ${this.name} ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre es muy corto!!!");
            }
            this.name = name;
        }
    }
    class Xmen extends Hero {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("esto es el contructor Xmen");
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
})();
//# sourceMappingURL=main.js.map