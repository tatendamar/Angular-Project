import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API_URL = 'http://localhost:5000/api/v1/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(`${API_URL}/users`, httpOptions) .pipe(
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
