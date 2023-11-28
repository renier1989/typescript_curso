(()=>{

    const fnNumeros = (a:number , b:number):number=> a + b;
    const saludo = (name:string) => `Hola ${name}`
    const mensajeDefault = () => `esto es un mensaje por defecto`

    let myFunction : ()=>void;

    // // la definicion para esta seccion seria 
    // // let myFunction : number
    // myFunction = 10
    // console.log(myFunction) 
    // console.log(typeof myFunction); // -> number hizo la inferencia automatica a numero
    
    // // la deficion del tipo para esta funcion seria 
    // // let myFunction : (a:number,b:number)=>number;
    // myFunction = fnNumeros
    // console.log(myFunction(2,2));
    // console.log(typeof(myFunction)); // -> number hizo la inferencia automatica a funcion

    // // la definicion del tipo para esta funcion seria 
    // // let myFunction : (a:string)=>string;
    // myFunction = saludo
    // console.log(myFunction('Renier Vargas'));
    // console.log(typeof(myFunction));
    
    // la definicion para esta funcion seria 
    // let myFunction : ()=>void;
    myFunction = mensajeDefault
    console.log(myFunction());
    console.log(typeof(myFunction));
        
    
    
    

})()