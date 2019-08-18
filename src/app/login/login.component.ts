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



  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private  loginService: LoginService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    this.loginService.login(this.model)
  }

}
