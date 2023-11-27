"use strict";
// esto es una funcion auto invocada, para evitar choque con las definiciones de variables globales de otros archivos
(() => {
    const nombre = "Renier Vargas";
    console.log(nombre);
    const a = "hola mundo";
    let b = 4;
    function saludar(msg) {
        console.log(msg.toUpperCase());
    }
    saludar('Venezuela');
})();
// const  msg = "hola mundo";
// const hero = {
//     name : 'superman',
//     age: 34
// }
// hero.age = 50
// console.log(hero.age + 1 );
