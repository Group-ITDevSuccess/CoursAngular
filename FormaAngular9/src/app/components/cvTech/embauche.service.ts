import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Person[];

  constructor() {
    this.personnes = [];
  }

  getEmbauchees(){
    return this.personnes;
  }

  embaucher(personne: Person): void{
    const index = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    }else{
      alert(`${personne.name} est déja sélectionnée !`);
    }
  }

  debaucher(personne): void{
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }

}
