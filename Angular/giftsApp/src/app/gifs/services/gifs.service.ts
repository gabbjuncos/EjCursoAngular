import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'sSfKcYCTU2qKwmqgg83ECg7echhFah9e';
  private _historial: string[] = [];

  get historial(){
    return [...this._historial]
  }
  
  constructor(private http:HttpClient){}

  // insertar valores al historial, para que siempre reciba como parametro algo
  buscarGifs( query:string = ''){
    // para verificar si lo que se esctibe es lo mismo pero cambia en minuscula o mayusculo
    query= query.trim().toLocaleLowerCase();
    // para ver que no se repita los que muestra el historial, y si no lo incluye lo inserto
    if(!this._historial.includes(query)){
      // el unshift agrega elemento al principio del arreglo
      this._historial.unshift(query);
      // para mostrar solo los utlimos 10 
      this._historial = this._historial.splice(0,10);
    }

    this.http.get('https://giphy.com/gifs/TOEIAnimationUK-dbz-dragon-ball-z-GRSnxyhJnPsaQy9YLn?limit=10')
    //hay que decir el tipo porque type script va a seber recien cuando tiene respuesque tipo es asi que le pongo tipo any porque lo unico que em eimporta es que se lo que va a dveolver 
    .subscribe(( resp:any ) => {
      console.log(resp);
    });

    //console.log(this._historial)
  }
}
