(()=>{

    type Fruta = {
        nombre : string,
        color: string
    }

    const manzana: Fruta = {
        nombre : 'Manzana',
        color: 'Rojo'
    }

    const banana : Fruta = {
        nombre: 'Banana',
        color: 'Amarrilla'
    }

    const sandia : Fruta = {
        nombre: 'Sandia',
        color: 'Verde'
    }

    const ArregloFrutas: Fruta[] = [banana, manzana, sandia,{nombre:'papaya', color:'amarilla'}];

    for (const fruta of ArregloFrutas) {    
        const {nombre} = fruta
        console.log(nombre,'-', fruta.color);
        
        
    }

})()