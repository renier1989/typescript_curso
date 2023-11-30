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
    const Magneto = new Xmen("Magneto", "un Viejo", true);
    console.log(Magneto);
    console.log(Magneto.fullName);
    Magneto.fullName = "Renier Vargas";
    console.log(Magneto.fullName);
})();
//# sourceMappingURL=main.js.map