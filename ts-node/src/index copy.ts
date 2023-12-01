// import { Hero,Hero2 as OtroAliasHero2,Hero3 } from "./classes/Hero"; // esto es una importacion con alias
import * as HeroClases from "./classes/Hero";
import poderes , {Powers} from "./data/poderes"; // lo llama sin {} porque es un export default

const Hero2 = 123;

// const capitanAmerica = new Hero('Capitan America',10,43);
// const algo = new OtroAliasHero2();
const capitanAmerica = new HeroClases.Hero('Capitan America',10,43);

HeroClases.fnTypescript();
console.log(capitanAmerica);

console.log(poderes);

const arreglo_poderes:Powers[] = [
    {
        id: 3,
        desc: 'Volar'
    }
]



