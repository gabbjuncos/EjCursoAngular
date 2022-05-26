import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre:'Vegeta',
          poder: 7500
        }
      ];

    constructor(){
        console.log('Servicio inicializado');
    }

}