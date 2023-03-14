import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  @Input() color= 'white';
  @Input() bgColor= 'blue';
  @Input() size = '25px';
  constructor() { }

  ngOnInit(): void {
  }
  changeSize(size){
    this.size = `${size}px`;
  }


}
