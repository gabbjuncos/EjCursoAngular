import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  
})
export class AppComponent {
  public title:string = 'Contador App';
  numero: number = 10;
  base: number=5;

  acumular(valor: number){
    this.numero +=valor;
  }
}
