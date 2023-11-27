(()=>{

    const personaje:string = 'Dr. Manhathan';
    function retornarNombreHeroe(){
        return personaje;
    }
    const heroName = retornarNombreHeroe();
    console.log(typeof retornarNombreHeroe);
    
    const heroeActivo = ():string=>{
        return 'algo'
    }
    const  heroeActivo2 = ():number =>{
        return 33
    }
    const algo = heroeActivo2()

    // muestra que el tipo es una funcion. pero la funcino en si espere un string
    console.log(typeof heroeActivo);
    console.log(typeof heroeActivo2);
    

})()