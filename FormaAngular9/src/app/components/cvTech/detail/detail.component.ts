import { Person } from 'src/app/models/Person';
import { ActivatedRoute } from '@angular/router';
import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne : Person;

  constructor(
    private cvService: CvService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.personne = this.cvService.getPersonneById(params.id);
        console.log(this.personne);
      }
    );
  }

}
