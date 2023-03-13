import { Person } from './../../../models/Person';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {

  @Input() personne: Person;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(){
    //Todo Emmetre un evenement et injecter la personne
    this.selectedPersonne.emit(
      this.personne
    );
  }

}
