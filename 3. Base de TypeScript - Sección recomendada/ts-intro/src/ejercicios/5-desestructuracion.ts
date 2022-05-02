
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles; 
}

interface Detalles{
    autor:string;
    anio: number;
}

const reproductor:Reproductor = {
    volumen:90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor:'Ed Sheeran',
        anio:2020
    }
}

// desestructuracion
// al volumen lo estoy renombrando
const {volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;


/*
console.log('El volumen actual de: ', reproductor.volumen);
console.log('El segundo actual de: ', reproductor.segundo);
console.log('La cancion actual de: ', reproductor.cancion);
console.log('El autor actual es: ', reproductor.detalles.autor);
*/

console.log('El volumen actual de: ', vol);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor actual es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta','Trunks'];
const [p1,p2,p3] = dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);