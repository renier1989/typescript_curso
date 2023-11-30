(() => {
  class Hero {
    constructor(public name: string, public realName: string) {
      console.log("esto es el contructor Hero");
    }

    // si es private , solo puede se accedido dentro del scope de la misma clase
// private getFullName() {
    // si es protected se puede acceder desde el scope de la misma clase o de clases extendidas
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Hero {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("esto es el contructor Xmen");
    }
    public getFullNameFromXmen() {
        console.log(super.getFullName());  // getFullName es private no lo puedo acceder
        console.log(super.getFullName());
        
    }
  }

  const Magneto = new Xmen("Magneto", "Erick", true);
  console.log(Magneto);
  Magneto.getFullNameFromXmen();
  
})();
