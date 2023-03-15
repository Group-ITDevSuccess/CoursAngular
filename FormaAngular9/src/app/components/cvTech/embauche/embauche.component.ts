import { Person } from 'src/app/models/Person';
import { EmbaucheService } from './../embauche.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnes: Person[];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbauchees();
  }

}
