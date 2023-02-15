import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {environment} from "src/environments/environment";
import { CurrentUserInterface } from '../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../auth/types/registerRequest.interface';
import { AuthResponseInterface } from '../auth/types/authResponse.interface';
import { TokenStorageService } from './token-storage.service';
import { LoginRequestInterface } from '../auth/types/login/loginRequest.interface';

const AUTH_API = environment.url

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,  private tokenStorage: TokenStorageService,){ }

  login(data: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(`${AUTH_API}/login`, data, httpOptions).pipe(
      map((response:  AuthResponseInterface) => {
        this.tokenStorage.saveToken(response.token);
      return response
      })
    )
  }

  register(data: RegisterRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(`${AUTH_API}/register`, data, httpOptions).pipe(
     map((response:  AuthResponseInterface) => {
        this.tokenStorage.saveToken(response.token);
      return response
     }
     )
    )
  }

  isLoggedIn(){
    return  !!localStorage.getItem('auth-token')
  }
}
