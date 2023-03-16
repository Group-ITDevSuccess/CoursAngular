import { Person } from 'src/app/models/Person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Person[];
  constructor() {
    this.personnes = [
      new Person(1, 'Muriel', 'TSIDIANY', 22, "tim_logo.png", 256525666, 'Developper'),
      new Person(2, 'Fatima', 'FANO', 21, "tim_logo.png", 25252525, 'Teacher'),
      new Person(3, 'Inconnu', 'Test', 45, "", 252522825, 'Formateur'),
    ];
   }

   getPersonnes(): Person[]{
    return this.personnes;
   }

   getPersonneById(id: number): Person{
    const personne = this.personnes.find(personne => {
      return personne.id == id
    });

    return personne;
   }

   addPersonne(personne: Person): void{
    console.log(personne);
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
   }
}
