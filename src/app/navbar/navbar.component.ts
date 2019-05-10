import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedTab = 'home';
  blogTab: boolean;
  intranetTab: boolean;
  projectsTab: boolean;
  appsTab: boolean;
  homeTab = true;
  beforeTab = true;

  constructor() { }

  ngOnInit() {
  }
  onSelect(tab: string) {
    switch (tab) {
      case 'blog':
        this.selectedTab = 'blog';
        this.blogTab = true;
        this.intranetTab = false;
        this.projectsTab = false;
        this.appsTab = false;
        this.homeTab = false;
        break;
      case 'intranet':
        this.selectedTab = 'intranet';
        this.blogTab = false;
        this.intranetTab = true;
        this.projectsTab = false;
        this.appsTab = false;
        this.homeTab = false;
        break;
      case 'projects':
        this.selectedTab = 'projects';
        this.blogTab = false;
        this.intranetTab = false;
        this.projectsTab = true;
        this.appsTab = false;
        this.homeTab = false;
        break;
      case 'apps':
        this.selectedTab = 'apps';
        this.blogTab = false;
        this.intranetTab = false;
        this.projectsTab = false;
        this.appsTab = true;
        this.homeTab = false;
        break;
      default :
        this.selectedTab = 'home';
        this.blogTab = false;
        this.intranetTab = false;
        this.projectsTab = false;
        this.appsTab = false;
        this.homeTab = true;
        break;
    }
  }

}
