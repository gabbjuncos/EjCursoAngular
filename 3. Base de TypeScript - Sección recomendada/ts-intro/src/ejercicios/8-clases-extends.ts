// clases e interfaces, diferencias, en las clases se pude definir la visibilidad de los atributos, public 
// pueden acceder todos, private solo en la clase, y static se pude acceder sin instanciar al objeto
// por defecto es publica si no se define 
// para extender y usar atributos o metods de la clase de la que extiende

class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string,
    ){}
}

class Heroe extends PersonaNormal{
    
    //public alterEgo:string;
    //public edad:number;
    //public nombreReal:number;
    //apellido:string;

    // asi se define mas rappido los atributos de una clase, dentro () del constructor y dando el tipo y visibilidad
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string,
        public apellido:string,
    ){
        super(nombreReal,"New York, USA");
    }
}

const ironman = new Heroe("Gabriel", 27, "Gabi Juncos","Juncos");
console.log(ironman);