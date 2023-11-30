"use strict";
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
    }
    class Xmen extends Hero {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("esto es el contructor Xmen");
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
            console.log(super.getFullName());
        }
    }
    const Magneto = new Xmen("Magneto", "Erick", true);
    console.log(Magneto);
    Magneto.getFullNameFromXmen();
})();
//# sourceMappingURL=main.js.map