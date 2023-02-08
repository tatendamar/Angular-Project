import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "src/environments/environment";

const AUTH_API = environment.url

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${AUTH_API}/login`, {
      email,
      password
    }, httpOptions);
  }

  register(
    username: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    gender: string,
    hobbies: string,
   	occupation: string,
	  address: string
  ): Observable<any> {
    return this.http.post(`${AUTH_API}/register`, {
      username,
      email,
      password,
      first_name,
      last_name,
      gender,
      hobbies,
      occupation,
      address
    }, httpOptions);
  }

  isLoggedIn(){
    return  !!localStorage.getItem('auth-token')
  }
}
