interface Pasajero{
    nombre: string;
    hijos?: string[]
}

const pasajero1:Pasajero = {
    nombre: 'Fernando'
}

const pasajero2:Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
}

function imprimirHijos(pasajero: Pasajero):void{
    //verifica antes si tiene el atributo hijos opcional , si tiene continua con el length, en caso que no tenga devuelve 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
