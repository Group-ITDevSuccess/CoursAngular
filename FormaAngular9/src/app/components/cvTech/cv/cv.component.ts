import { CvService } from './../cv.service';
import { PremierService } from './../../service/premier.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Person[];
  selectedPersonne: Person;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }

  selectPersonne(personne){
    this.selectedPersonne =  personne;
  }

}
