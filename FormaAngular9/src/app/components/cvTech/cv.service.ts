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
}
