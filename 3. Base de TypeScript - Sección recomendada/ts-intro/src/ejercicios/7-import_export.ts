import { Producto, calcularISV } from "./ejercicios/6-desestructuracion_argumentos";

//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

const carritoCompra: Producto[]=[
    {
        desc:'Telefono 1',
        precio:100,
    },
    {
        desc:'Telefono 2',
        precio:150
    },
];

const [total, isv]= calcularISV(carritoCompra);

console.log('Total', total);
console.log('ISV',isv);