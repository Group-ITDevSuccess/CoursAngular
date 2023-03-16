import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm){
    console.log(formulaire);
  }

}
