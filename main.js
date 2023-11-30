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
    console.log(antman);
    console.log(Personaje.age);
    console.log(antman.bio());
    console.log(Personaje.getAvgAge());
})();
//# sourceMappingURL=main.js.map