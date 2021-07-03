import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Ironman", "Spiderman", "Capitan America", "hulk"];
  heroeBorrado: string = "";

  borrarHeroe(){

    const heroe =this.heroes.pop();
    this.heroeBorrado = heroe || "";
  }
}
