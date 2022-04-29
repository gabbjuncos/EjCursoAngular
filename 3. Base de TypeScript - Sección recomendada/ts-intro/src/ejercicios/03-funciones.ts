

//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
// se pude definir en type script que tipo de dato va a devolver
function sumar(a:number, b: number) : number{
    return a + b;
}

const resultado = sumar(10,20);

console.log(resultado);

// funcio con flecha y poner tipo en algumentos y salida

const sumarFlecha = (a:number, b:number): number =>{
    return a+b;
}
// funcion donde se puede poner un parametro como opcional ?, otro para que sea por defecto si no se pasa
// y un armneto obligatorio no puede seguir despues de un opcional, el opcional tiene que estar al ultimo

function multiplicar(numero:number, otroNumero?:number, base:number = 2): number {
    return numero*base;
}

const resultado1 = multiplicar(10,20);

console.log(resultado1)

// para definir objeto con interface

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp:() => void;
}

function curar(personaje: PersonajeLOR,curarX:number): void{
    personaje.pv += curarX;
    //console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();

// una interface es como una clase tonta, no sabe como funciona los metosodos,
// los geters no sabe si tiene seters
// pero sirve como para restringir los parametos