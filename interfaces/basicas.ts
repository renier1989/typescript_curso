(()=>{

    interface Hero {
        name: string;
        age: number;
        powers: number[];
        getName?: ()=>string;
    }

    let flash:Hero = {
        name: "flash",
        age: 30,
        powers: [1,2],
    }

    let superman: Hero = {
        name: "superman",
        age: 55,
        powers: [1,2],
        getName(){
            return this.name
        }
    }

})()