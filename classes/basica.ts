(()=>{

    class Personaje{
        private name: string;
        public team: string;
        public realName?: string;
        static age:number = 33;

        constructor(name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman : Personaje = new Personaje('AntMan', 'Vengadores');
    console.log(antman);
    // las propiedades static se acceden haciendo la referencia a la clase directamente
    // console.log(Personaje.age);
    
    
})()