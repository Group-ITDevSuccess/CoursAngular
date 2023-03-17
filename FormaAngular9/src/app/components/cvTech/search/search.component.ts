import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { CvService } from './../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine = '';
  searchResult: Person[];

  constructor(
    private csService : CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(){
    const name = this.chaine.trim();
    if (name.length) {
      this.csService.findByName(name).subscribe(
        (personnes)=>{
          this.searchResult = personnes;
        }
      );
    }else{
      this.searchResult = [];
    }

  }

  selectPersonne(personne: Person){
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.chaine='';
  }

}
