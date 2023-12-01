import poderes from "../data/poderes";


export class Hero{
    constructor(
        public name:String,
        public powerId:number,
        public age:number,
    ){}

    get poder():string{
        return poderes.find( poder => poder.id === this.powerId)?.desc || 'No hay nada!'
    }
}

export class Hero2 {}
export class Hero3 {}

export const miNombre = 'Renier Vargas'
export const fnTypescript = () =>{
    console.log('Typescript Rules!!');
    
}