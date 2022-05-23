import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje={
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
