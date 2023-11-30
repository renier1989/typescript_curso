"use strict";
(() => {
    class Personaje {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Personaje.age = 33;
    const antman = new Personaje('AntMan', 'Vengadores');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map