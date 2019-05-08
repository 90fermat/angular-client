import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selected = 'home';
  constructor() { }

  ngOnInit() {
  }
  onSelect(selected: string) {
    switch (selected) {
      case 'blog':
        break;
      case 'intranet':
        break;
      case 'projets':
        break;
      default :
        break;
    }
  }

}
