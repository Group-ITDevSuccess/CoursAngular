import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './../service/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility = false;
  valueHidden = false;
  isLoggerValue = false;

  constructor(
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authentificationService.logout();
  }



  show(){
    this.visibility = ! this.visibility;
  }

}
