import { Person } from 'src/app/models/Person';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne)=>{
            this.personne = personne
          },
          (error)=>{
            console.log(`Erreur lors de get :  ${error}`);
          }
        );
        console.log(this.personne);
      }
    );
  }

  deletePersonne(){
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response)=>{
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
