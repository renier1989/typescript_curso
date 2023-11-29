(()=>{

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
    
})()