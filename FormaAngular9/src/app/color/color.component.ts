import { Router } from '@angular/router';
import { PremierService } from './../components/service/premier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color ='red';
  constructor(
    private premierService: PremierService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  processReq(message: any){
    alert(message);
  }

  loggerMesData(){
    this.premierService.logger('test');
  }

  goToCv(){
    const link = ['cv'];
    this.router.navigate(link);
  }

}
