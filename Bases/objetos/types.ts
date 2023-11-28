(()=>{

    type Hero = {
        nombre: string,
        alias? : string,
        edad : number,
        poderes : string[],
        getNombre? : () => string
    }

    // la primera declaracion es la que se hace la deficion de los tipos internos del objeto
    let superHeroe: Hero = {
        nombre : 'Bruce Wayne',
        alias : 'Batman',
        edad : 30,
        poderes : ['Inteligencia','Millonario']
    }

    // la primera declaracion es la que se hace la deficion de los tipos internos del objeto
    let superVillano: Hero = {
        nombre : 'Carciller Palpatine',
        alias : 'Lord Sidiuos',
        edad : 80,
        poderes : ['Rayos de la fuerza','Controla la republica'],
        getNombre(){
            return this.nombre
        }
        
    }


})()