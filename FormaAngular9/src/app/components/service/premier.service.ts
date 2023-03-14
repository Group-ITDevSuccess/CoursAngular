import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  constructor() { }

  logger(data){
    console.log(data);
  }
}
