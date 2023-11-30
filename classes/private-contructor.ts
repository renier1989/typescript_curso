(()=>{

    class Starwars{
        static instance:Starwars
        private constructor(public pelicula:string, public nombre: string){}

        static obtenerPelicula():Starwars{
            if(!Starwars.instance){
                Starwars.instance = new Starwars('Episodio 3','La venganza de los sith');
            }
            return Starwars.instance
        }

        cambiarPelicula(otraPelicula:string):void{
            this.pelicula = otraPelicula
        }
    }


    // esto solo se puede hacer si el contructor de la clase es publico
    // const starwars1 = new Starwars('Episodio 1', 'La amenaza fantasma');
    // const starwars2 = new Starwars('Episodio 2', 'La guerra de los clones');
    // console.log(starwars1);
    // console.log(starwars2);


    // solo se puede obtener una unica instancia de lo que tenga la clase
    const pelicula  = Starwars.obtenerPelicula();
    const pelicula2  = Starwars.obtenerPelicula();
    console.log(pelicula, pelicula2);
    pelicula.cambiarPelicula('Harry Potter');
    pelicula2.cambiarPelicula('Interstellar');
    console.log(pelicula);
    console.log(pelicula2);

})()