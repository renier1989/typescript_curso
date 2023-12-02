function printLogScreen(constructor: Function) {
  console.log(constructor);
}

// se le pueden pasar parametros a un decorador.
const printContructorInScreen = (print: boolean = false): Function => {
  if (print) {
    return printLogScreen;
  }
  return () => console.log("hola desde un decorador arrow function");
};

// @printLogScreen
@printContructorInScreen()
export class PersonajeStarwars {
  public autor: string = "George Lucas";
  constructor(public nombre: string) {}
}
