(() => {
  // con esto estoy dando la estructura que va a tener el arreglo.
  // su primero valor debe ser un string y el segundo un numero
  const superheroes: [string, number] = ["superman", 100];

  //   modifico los valores en las posiciones 0 y 1
  superheroes[0] = "batman";
  superheroes[1] = 1;
//   superheroes[0] = 2;
//   superheroes[1] = 'algo';

  superheroes.forEach((info) => console.log(info));
})();
