(()=>{

    // esto es un intro a las clases en JS con ES6

    class Vengador {
        nombre;
        poder;

        constructor(nombre='N/A', poder=0){
            this.nombre = nombre;
            this.poder = poder;
            this.loquesea = false; // mal
        }
    }

    class VengadorVolador extends Vengador{
        vuela;

        constructor(nombre,poder){
            super(nombre,poder)
            this.vuela = true;
            this.otracoas = 123; // mal
        }
    }

    const Thor = new Vengador('Thor', 1000);
    const Ironman = new VengadorVolador('Ironman', 189);

    console.log(Thor);
    console.log(Ironman);


})()