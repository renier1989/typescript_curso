(() => {
  // esto es para el resto de los argumentos que quiero que sea opcionales
  // el resto de los argumentos es tratado como un arreglo
  const fullName = (firstName: string, ...restoArgs: string[]):string => {
    return `${firstName} ${restoArgs.join(' ')}`;
  };

  const nombrePersona = fullName("Renier", "Josue", "Vargas", "Mejias");
  console.log({nombrePersona});
})();
