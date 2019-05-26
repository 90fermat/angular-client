import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any ={};

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private  loginService: LoginService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    let url = environment.url +'/login';
    this.http.post<Observable<boolean>>(url, {
      userName: this.model.username,
      password: this.model.password
    }, this.httpOptions).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
        this.loginService.isLogged = true;
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }

}
