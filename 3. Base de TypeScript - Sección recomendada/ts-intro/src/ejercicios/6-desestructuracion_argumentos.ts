// para que lo puedo utlizar desde otras clases tengo que exportar la interfaz o clase
export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto = {
    desc:'Nokia A1',
    precio:150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}
// funcion para calcular el impuesto sobre venta
//recibe un arreglo de productos y devuelve un arreglo con 2 elementos 
export function calcularISV(Productos:Producto[]):[number, number]{
    let total = 0;
    // de esta forma {precio} esta desestructurando el argumento para no tener que poner producto.precio
    Productos.forEach( p => {
        total +=p.precio;
    })
    
    return[total, total * 0.15];
}

function calcularISVV2(Productos:Producto[]):[number, number]{
    let total = 0;
    // de esta forma {precio} esta desestructurando el argumento para no tener que poner producto.precio
    Productos.forEach( ({precio}) => {
        total +=precio;
    })
    
    return[total, total * 0.15];
}

// armo el arreglo articulos

const articulos = [telefono, tableta];

// desestructuro el arreglo
const [total, isv] = calcularISV(articulos);

console.log('Total: ',total);
console.log('ISV: ', isv);
