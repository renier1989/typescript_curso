(()=>{

    let nada: undefined = undefined;
    // nada = 123

    // // strictNullChecks - parametro de configuracion en el TSconfig
    // // si se desactiva puede permitir los valores null o undefined
    // let isActive: boolean = undefined

    // si se neceita que un valor inicial de un boolean pueda ser undefined o null
    let isActive: (boolean | undefined | null) = undefined 
    isActive = undefined
    isActive = true
    isActive = null

})()