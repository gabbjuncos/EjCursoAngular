import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  buscar(termino:string){
    //console.log(this.txtBuscar);
    const valor= this.txtBuscar.nativeElement.value;
    // controlar que cuando la longuitud de lo que se envia en el buscador es 0 no agregarlo
    
    if(valor.trim().length==0){
      return
    }
    //console.log(valor);
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value='';
  }


}
