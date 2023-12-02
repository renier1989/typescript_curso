import { genericFuncitonNormal, genericFunction, printAlgo } from "./generics/generics";


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


// ejemplo de funcion genericas
const name:string = 'Renier Vargas'; 
const someNumber:number = 234.2343424;

console.log( genericFunction(name).toUpperCase() ); 
console.log( genericFunction(new Date()).getFullYear() ); 
console.log( genericFunction(someNumber).toFixed(2) ); 

