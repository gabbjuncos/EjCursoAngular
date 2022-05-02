interface SuperHeroe{
    nombre:string;
    edad: number;
    // como direccion tiene varias variables dentro no queda como
    // definirlas asi porque puede tener varios elementos
    // lo mejor es crear otra interfaz que haga referencia a esa variable
    //direccion: {
      //  calle:string;
        //pais:string;
        //ciudad:string;
    direccion: Direccion,
    mostrarDireccion:() => string;
}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
