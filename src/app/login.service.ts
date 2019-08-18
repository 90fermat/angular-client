import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName: string;
  isLogged = false;



  constructor(
    private http: HttpClient,
    private router: Router
  ) { }



  //  options = {
  //   "crowd": {
  //     "base": "http://localhost:8059/crowd/"
  //   },
  //   "application": {
  //     "name": "my application",
  //     "password": "pass123"
  //   }
  // }
  initHome() {
    /*let url = environment.url + '/user';

    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

    let options = { headers: headers };
    this.http.post<Observable<Object>>(url, {}, options).
    subscribe(principal => {
        this.userName = principal['name'];
      },
      error => {
        if(error.status == 401)
          alert('Unauthorized');
      }
    );*/
  }

  login(model: any) {
    let url = environment.url +'/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      }),
      params: new HttpParams().append('username', model.username)
        .append('password', model.password),

      withCredentials: true
    };
    this.http.post<Observable<boolean>>(url, {
      username: model.username,
      password: model.password
    }, httpOptions).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(model.username + ':' + model.password));
        this.isLogged = true;
        this.userName = model.username;
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

  logout() {
    sessionStorage.setItem('token', '');
    this.isLogged = false;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
