import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'sSfKcYCTU2qKwmqgg83ECg7echhFah9e';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  get historial(){
    return [...this._historial]
  }
  
  constructor(private http:HttpClient){

    // tomamos el listado, puede retornar string o null
    //localStorage.getItem('historial');
    
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }

    // otra forma para que devuelva un arreglo vacio
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
  }

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
      // para guardar historial en local storage, dandole de nombre historial y pasandole la query
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams()
        .set('api_key',this.apikey)
        .set('limit',10)
        .set('q',query);

    console.log(params.toString());
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params:params})
    //hay que decir el tipo porque type script va a seber recien cuando tiene respuesque tipo es asi que le pongo tipo any porque lo unico que em eimporta es que se lo que va a dveolver 
    .subscribe(( resp ) => {
      console.log(resp.data);
      this.resultados = resp.data;
      // se guardan los resultados de la ultima busqueda
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    });

    //console.log(this._historial)
  }
}
