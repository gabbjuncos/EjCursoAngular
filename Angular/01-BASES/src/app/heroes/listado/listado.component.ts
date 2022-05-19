import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  //constructor() { 
    //console.log('constructor')
  //}

  //ngOnInit(): void {
    //console.log('ngOnInit')
  //}

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado_: string = '';

  borrarElemento(): void {
    //this.heroes.pop();
    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado_= heroeBorrado || '';
  }

}
