import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  teams = [
    'est',
    'om',
    'barca',
    'milan'
  ];
  est = true;
  milan= false;
  barca= false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTeam(){
    this.est = true;
    this.barca = false;
    this.milan= true;
  }
}
