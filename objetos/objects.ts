(()=>{

    // la primera declaracion es la que se hace la deficion de los tipos internos del objeto
    let superHeroe: {nombre:string, alias?:string, edad:number , poderes: string[] , getNombre?:()=>string} = {
        nombre : 'Bruce Wayne',
        alias : 'Batman',
        edad : 30,
        poderes : ['Inteligencia','Millonario']
    }

    // esta reasignacion de valores debe seguir la primera definicion de tipos que se hizo en primer lugar
    superHeroe = {
        nombre: 'Clark Kent',
        // alias : 'Superman',
        edad: 33,
        poderes: ['Vision RayosX', 'Super Fuerza'],
        getNombre(){
            return this.nombre
        }
    }

    // la primera declaracion es la que se hace la deficion de los tipos internos del objeto
    let superVillano: {nombre:string, alias?:string, edad:number , poderes: string[] , getNombre?:()=>string} = {
        nombre : 'Carciller Palpatine',
        alias : 'Lord Sidiuos',
        edad : 80,
        poderes : ['Rayos de la fuerza','Controla la republica']
    }


})()