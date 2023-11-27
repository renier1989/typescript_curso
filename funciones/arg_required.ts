(()=>{
    const fullName = (firstName:string , lastName:string) =>{
        return `${firstName} ${lastName}`
    }
    // indica que la funcion fullName espera 2 argumentos y que sean del tipo esperado string
    const name = fullName('Renier', 'Vargas');
    console.log({name});
    
})()