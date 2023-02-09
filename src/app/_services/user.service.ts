import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {environment} from "src/environments/environment";

const API_URL = environment.url

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(page: number, size: number): Observable<any> {
    return this.http.get(`${API_URL}/users?page=${page}&size=${size}`, httpOptions) .pipe(
      map(response => {


        const data = {...response}

        return data;
      })
    )
  }


  getUser(uuid: string): Observable<any> {
    return this.http.get(`${API_URL}/user/${uuid}`).pipe(
        map(response => {


        const data = {...response}

        return data;
      })
    )
  }

  updateUser(
      uuid: string,
      hobbies: string,
      occupation: string,
      address:string
      ): Observable<any> {
    return this.http.put(`${API_URL}/user/${uuid}`, {
      hobbies,
      occupation,
      address
    }).pipe(
        map(response => {


        const data = {...response}

        return data;
      })
    )
  }

   deleteUser(
      uuid: string,
      ): Observable<any> {
    return this.http.delete(`${API_URL}/user/${uuid}`).pipe(
        map(response => {


        const data = {...response}

        return data;
      })
    )
  }

}
