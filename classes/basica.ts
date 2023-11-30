(() => {
  class Personaje {
    // private name: string;
    // public team: string;
    // public realName?: string;
    // static age:number = 33;

    // constructor(name:string, team:string, realName?:string){
    //     this.name = name;
    //     this.team = team;
    //     this.realName = realName;
    // }

    static age: number = 33;
    static getAvgAge(){

        return `${this.name} - ${this.age}`; // esto accede al nombre pero de la clase o lo que esta definido como static, no a las propiedades del constructor.

    }

    constructor(
      private name: string,
      private team: string = "texto opcional",
      public realName?: string
    ) {}

    // metodo publico
    bio(){
        return `${this.name} (${this.team})`;
    }
  }

  const antman: Personaje = new Personaje("AntMan", "Vengadores");
  console.log(antman);
  // las propiedades static se acceden haciendo la referencia a la clase directamente
  console.log(Personaje.age);

  console.log(antman.bio());
  console.log(Personaje.getAvgAge());
  
})();
