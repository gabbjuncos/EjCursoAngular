import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  // recibir los personajes como inputs
  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje ={
      // para que tenga datos por defecto
    nombre:'Trucks',
    poder:14000
  }

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){return;}
    console.log(this.nuevo)
    // agregar al arreglo
    this.personajes.push(this.nuevo)
    // inicializamos de nuevo al obj pesonaje nuevo
    this.nuevo = {
      nombre:'',
      poder:0
    }
    
  }

}

