import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<string>;
  mesImage = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'rotating_card_thumb.png',
    'rotating_card_thumb2.png',
    'rotating_card_thumb3.png',
  ];

  currentImage: string;
  constructor() { }

  ngOnInit(): void {
    this.monObservable = new Observable(
      (observer) => {
        let i = this.mesImage.length - 1;
        setInterval(
          () => {
            observer.next(this.mesImage[i]);
            if (i > 0) {
              i--;
            }else{
              i = this.mesImage.length - 1;
            }
          },1500)
        }
      );
      this.monObservable.subscribe(
        (result) => {
          console.log(result);
          this.currentImage = result;
        }
      );
  }

}
