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

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// esto es un factory decorator que siempre retorna otra funcion
function CheckValidDataId(): Function {
  // target apunta a lo que se esta decorando
  // key es el nombre a lo que esta decorando
  // descriptor es la parte de los argumentos que se le pasan al metodo
  return function (target: any, key: String, descriptor: PropertyDescriptor) {
    // console.log('aqui');
    // console.log(target, key, descriptor);
    // console.log(descriptor.value);
    const self = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 100) {
        return console.error("El Id es invalidad, debe estar entre 1 y 100");
      } else {
        return self(id);
      }
    };
  };
}

function readOnly(isWriteAble: boolean = true): Function {
  return (targe: any, key: string) => {
    const  descriptor: PropertyDescriptor = {
        get(){
            console.log(this, 'getter');
            return 'Renier';
        },
        set(this , val){
            // console.log(this,val,key)
            Object.defineProperty(this,key,{
                value:val,
                writable: !isWriteAble,
                enumerable:false
            })
        }
    }

    return descriptor

  };
}

// los decoradores se van ejecutando en order de decalracion
// @printLogScreen
// @bloquearPrototipo
// @printContructorInScreen()
export class PersonajeStarwars {
    @readOnly(true)
  public autor: string = "George Lucas";
  constructor(public nombre: string) {}

  @CheckValidDataId()
  saveDataInDB(dataId: number) {
    console.log(`los datos fueron registrados con exito : ${dataId}`);
  }
}
