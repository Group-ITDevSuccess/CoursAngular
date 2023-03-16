import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link= 'http://localhost:3000/api/Users/login';
  constructor(
    private http: HttpClient
  ) { }
  login(credentials):Observable<any>{
    return this.http.post<any>(this.link, credentials);
  }
}
