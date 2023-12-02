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

const bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}


// esto es un factory decorator que siempre retorna otra funcion
function CheckValidDataId(){
    // target apunta a constructor de la clase
    // key es el nombre a lo que esta decorando
    // descriptor es la parte de los argumentos que se le pasan al metodo
    return function(target: any, key: String, descriptor: PropertyDescriptor){
        // console.log('aqui');
        // console.log(target, key, descriptor);
        // console.log(descriptor.value);
        const self = descriptor.value;
        descriptor.value = (id:number)=>{
            if(id < 1 || id > 100){
                return console.error('El Id es invalidad, debe estar entre 1 y 100');
            }else{
                return self(id)
            }
        }
        
    }
}



// los decoradores se van ejecutando en order de decalracion
// @printLogScreen
// @bloquearPrototipo
// @printContructorInScreen()
export class PersonajeStarwars {
  public autor: string = "George Lucas";
  constructor(public nombre: string) {}

  @CheckValidDataId()
  saveDataInDB(dataId:number){
    console.log(`los datos fueron registrados con exito : ${dataId}`);
  }
}
