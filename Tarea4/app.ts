(() => {
  // Crear interfaces

  interface Carro {
    encender: boolean;
    velocidadMaxima : number;
    acelerar():void;
  }

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  const conducirBatimovil = (auto:Carro): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  };

  const batimovil:Carro = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Malo{
    reir ?:boolean;
    comer ?: boolean;
    llorar ?: boolean;
  }


  const guason:Malo = {
    reir: true,
    comer: true,
    llorar: false,
  };


  const reir = (guason:Malo): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion

  interface CityBatman {
    (ciudadanos:string[]):number;
  }

  const ciudadGotica:CityBatman = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */

      interface Datos{
        nombre: string;
        edad: number;
        sexo: string;
        estadoCivil:string;
        imprimirBio():void;
      }

  class Persona implements Datos {
    nombre='Renier';
    edad=33;
    sexo='M';
    estadoCivil ='Casado';
    imprimirBio(){
      console.log('nada');
      
    }
  }
})();
