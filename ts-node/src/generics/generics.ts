export const printAlgo = (argumento:any):void =>{
    console.log(argumento);
}

// esto es una funcion normal sin tipado generico
export function genericFuncitonNormal(argument:any){
return argument;
}

// esto es una funcion generica que retorna el mismo tipo de lo que recibe la funcion
export function genericFunction<T>(argument:T){
    return argument;
}