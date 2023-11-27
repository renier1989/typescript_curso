(()=>{

    // el void es cuando una funcion no retorna nada
    function sinNada(){

    }
    // // mal . porque esta retornando algo
    // function sinNadaMas():void{
    //     return true
    // }

    // bien  igual no retorna nada
    function sinNadaMas():void{
        console.log('salio algo de aqui');
        return;
    }

    const vacio = ():void=>{
        console.log('algo vacio');
    }

    const algo = sinNada();
    console.log(algo);
    const algomas = sinNadaMas();
    console.log(algomas);
    vacio()

})()