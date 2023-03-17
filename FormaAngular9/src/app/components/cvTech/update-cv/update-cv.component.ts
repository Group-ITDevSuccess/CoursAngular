import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from './../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  personne: Person;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService : CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne)=>{
            this.personne = personne
          },
          (error)=>{
            console.log(`Erreur lors de get :  ${error}`);
          }
        );
        /* console.log(this.personne); */
      }
    );
  }

  updatePersonne(){
    this.cvService.updatePersonne(this.personne).subscribe(
      ()=>{
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error)=>{
        console.log(`Erreur :  ${error}`);
      }
    );
  }
}
