import { genericFuncitonNormal, genericFunction, genericFuntionArrow, printAlgo } from "./generics/generics";
import { Heroe, Villano } from "./interfaces";



// // funcion generica basica porque recibe cualquier tipo de valor any
// printAlgo('renier');
// printAlgo(123);
// printAlgo(new Date());
// printAlgo({a:1,b:2,c:3});
// printAlgo(true);
// printAlgo(crypto.randomUUID());
// printAlgo([1,2,3,4,5,6,7,8,9,10,11]);

// console.log( genericFuncitonNormal(3.1434234234).toFixed(2) );
// console.log( genericFuncitonNormal('Renier Vargas').toFixed(2) ); // Error
// console.log( genericFuncitonNormal(new Date()).toFixed(2) ); // Error
// console.log( genericFuncitonNormal(3.1434234234).toFixed(2) );


// // ejemplo de funcion genericas
// const name:string = 'Renier Vargas'; 
// const someNumber:number = 234.2343424;

// console.log( genericFunction(name).toUpperCase() ); 
// console.log( genericFunction(new Date()).getFullYear() ); 
// console.log( genericFunction(someNumber).toFixed(2) ); 

const deadpool = {
    name: "Deadpool", // en la interface de Heroe y Villano
    realName: "Wade Winston Wilson", // en la interface de Heroe
    nivelPeligro: 100, // en la interface de Villano
}

console.log( genericFuntionArrow<Heroe>(deadpool).realName );
console.log( genericFuntionArrow<Villano>(deadpool).nivelPeligro );

