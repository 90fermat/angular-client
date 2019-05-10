import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.messageService.add('Welcome HOME Site in Maintenance');
  }
}
