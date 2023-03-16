import { Router } from '@angular/router';
import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  errorMsg ='';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm){
    
    this.cvService.addPersonne(formulaire.value).subscribe(
      (reponse) => {
        const link = ['cv'];
        this.router.navigate(link);
        console.log(reponse);
      },
      (error)=>{
        this.errorMsg = "Probleme de connexion a votre serveur!";
        console.log(error);
      }
    );
  }

}
