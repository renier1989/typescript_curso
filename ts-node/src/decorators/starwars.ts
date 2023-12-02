function printLogScreen(constructor: Function){
    console.log(constructor);
}

@printLogScreen
export class PersonajeStarwars{

    public autor:string = "George Lucas";

    constructor(
        public nombre: string
    ){

    }
}