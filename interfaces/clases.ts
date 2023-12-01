(()=>{

    interface Xmen {
        name: string;
        realName: string;
        mutantFullName(id:number):string;
    }

    interface Human {
        age: number;
    }

    class Mutante implements Xmen,Human{
        name='Mutante';
        realName= 'Reneir';
        age= 33;

        mutantFullName(): string {
            return `${this.name} ${this.realName}`
        }
    }

})()