import { genericFunciton, printAlgo } from "./generics/generics";


// // funcion generica basica porque recibe cualquier tipo de valor any
// printAlgo('renier');
// printAlgo(123);
// printAlgo(new Date());
// printAlgo({a:1,b:2,c:3});
// printAlgo(true);
// printAlgo(crypto.randomUUID());
// printAlgo([1,2,3,4,5,6,7,8,9,10,11]);

console.log( genericFunciton(3.1434234234).toFixed(2) );
console.log( genericFunciton('Renier Vargas').toFixed(2) );
console.log( genericFunciton(new Date()).toFixed(2) );

