

//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
// infiere que valores pueden ingresar en la lista si no se especifica 

let habilidades = ['Bash','Counter','Healing',100];
// marca error si defino que el arreglo acepta string y booleanos y quiero ingresar otro tipo de dato
//let habilidades1: (string| boolean)[] = [1,'hola',true]; 

let habilidades2: (string)[] = [];

// para definir objetos

interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    // con el ? decimos que es opcional definir ese atributo de una
    puebloNatal?:string;
}
// instancio el obj perono defino pueblo natal
const personaje: Personaje = {
    nombre: 'Strider',
    hp:100,
    habilidades:['Bash','Counter','Healing']
}

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje);

