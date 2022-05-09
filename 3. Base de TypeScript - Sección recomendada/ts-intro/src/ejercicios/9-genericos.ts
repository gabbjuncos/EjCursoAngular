// <T> significa generico
function queTipoSoy<T>(argumento:T){
    return argumento;
}
// especificamos de forma implicito
let soyString = queTipoSoy('Hola mundo');

let soyNumero = queTipoSoy(100);

let soyArreglo = queTipoSoy([1,2,3,4,5]);
// especificamos de forma explicita indicando el tipo

let soyExplicito= queTipoSoy<number>(100);