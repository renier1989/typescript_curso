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

    // esto siempre deben retornar algo
    get fullName() {
      return `algo desde el get : ${this.name} ${this.realName}`;
    }
    // esto siempre debe recibir unicamente un parametro
    set fullName(name) {
        if(name.length < 3){
            throw new Error("El nombre es muy corto!!!");
        }
      this.name = name;
    }
  }

  class Xmen extends Hero {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("esto es el contructor Xmen");
    }
    public getFullNameFromXmen() {
      // console.log(super.getFullName());  // si getFullName es private no lo puedo acceder
      console.log(super.getFullName());
    }
  }

  const Magneto = new Xmen("Magneto", "un Viejo", true);
  console.log(Magneto);
  //   Magneto.getFullNameFromXmen();

  // aqui accedo al get antes del set
  console.log(Magneto.fullName);
  // aqui accedo al set porque le asigno algo
  Magneto.fullName = "Renier Vargas";

  // aqui accedo al get despues del set modificado
  console.log(Magneto.fullName);
})();
