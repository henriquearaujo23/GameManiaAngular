import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/Login";

  constructor(private httpCLient: HttpClient) { }

  login(user: Login): Observable<any> {
    return this.httpCLient.post(this.url, JSON.stringify(user),{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response'
    })
  }
}
