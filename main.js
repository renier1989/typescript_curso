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
(() => {
    class Starwars {
        constructor(pelicula, nombre) {
            this.pelicula = pelicula;
            this.nombre = nombre;
        }
        static obtenerPelicula() {
            if (!Starwars.instance) {
                Starwars.instance = new Starwars('Episodio 3', 'La venganza de los sith');
            }
            return Starwars.instance;
        }
        cambiarPelicula(otraPelicula) {
            this.pelicula = otraPelicula;
        }
    }
    const pelicula = Starwars.obtenerPelicula();
    const pelicula2 = Starwars.obtenerPelicula();
    console.log(pelicula, pelicula2);
    pelicula.cambiarPelicula('Harry Potter');
    pelicula2.cambiarPelicula('Interstellar');
    console.log(pelicula);
    console.log(pelicula2);
})();
//# sourceMappingURL=main.js.map