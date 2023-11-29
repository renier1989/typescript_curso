(()=>{


    //DESESTRUCRURACION PARA LOS OBJETOS

    type Datos = {
        heroe1: string;
        heroe2: string;
        activo: boolean;
        edad: number;
        cargarInformacio?(): string;
    }

    const algunosDatos = {
        heroe1 : 'Spiderman',
        heroe2 : 'Superman',
        activo : true,
        edad : 33,
        cargarInformacio(){
            return this.activo ? this.heroe1 : this.heroe2;
        }
    }

    const printDatos = ({heroe1, ...resto}: Datos)=>{
        console.log(heroe1.toUpperCase(), resto);
    }

    printDatos(algunosDatos)

    // DESESTRUTURACION PARA LOS ARREGLOS

    // recomendable siempre definir la forma que va a tener el arreglo
    
    // solo permiso que todo lo que esta en el arreglo sea de tipo String,
    // const informacionArrglo:string[] = ['Renier Vargas', 44, 23423.3, false];

    // es una tupla que define los tipos de cada uno de los elementos en el arreglo
    const informacionArrglo:[string, number,number, boolean] = ['Renier Vargas', 44, 23423.3, false];

    const [nombre,edad,peso,] = informacionArrglo

    console.log({edad, peso,nombre }, nombre.toUpperCase());
    
})()