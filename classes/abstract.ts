(() => {
  abstract class Mutante {
    constructor(public nombre: string, public rol: string) {}
  }

  class Bueno extends Mutante{
    salvar(){
        return `${this.nombre} tiene que salvar personas`;
    }
  }
  class Malo extends Mutante{
    destruir(){
        return `${this.nombre} tiene que destruir cosas`;
    }
  }

  const ciclope = new Bueno('Ciclope', 'Bueno');
  const magneto = new Malo('Magneto', 'Malo');

//   console.log(ciclope);
//   console.log(magneto);
  
//   console.log(ciclope.salvar());
//   console.log(magneto.destruir());
  
//   const printName = (personaje: Mutante) =>{
//     console.log(`${personaje.nombre}`);
//   }

//   printName(ciclope);
//   printName(magneto);
})();
