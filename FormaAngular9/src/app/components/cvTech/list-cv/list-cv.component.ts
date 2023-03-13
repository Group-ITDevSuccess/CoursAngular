import { Person } from './../../../models/Person';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {

  @Input() personnes: Person[];
  @Output() selectedPersonneOut = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedPersonne(selectedPersonne: any){
    // console.log(selectedPersonne);
    this.selectedPersonneOut.emit(
      selectedPersonne
    );
  }
}
