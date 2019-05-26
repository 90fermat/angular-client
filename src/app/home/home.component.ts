import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public messageService: MessageService,
    public  loginService: LoginService
  ) { }

  ngOnInit() {

    if(this.loginService.isLogged) {
      this.loginService.initHome();
      this.messageService.add('Welcome' + this.loginService.userName +' Site in Maintenance');
    } else {
        this.messageService.add('Welcome HOME Site in Maintenance');
    }

  }

}
