import { Router } from '@angular/router';
import { EmbaucheService } from './../embauche.service';
import { Person } from './../../../models/Person';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {

  @Input() personne: Person;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }

  moreInfo(){
    const link = ['cv',  this.personne.id];
    this.router.navigate(link);
  }
}
