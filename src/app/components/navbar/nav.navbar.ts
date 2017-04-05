import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: 'nav.navbar.html',
  styleUrls: [
    '../styles/app.component.css',
    '../styles/navbar.desktop.css',
    '../styles/navbar.mobile.css',
  ]
})

export class NavbarComponent {

  constructor(
    private router: Router,
  ) { }

}
