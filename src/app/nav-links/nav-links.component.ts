import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {

  router: Router;
  linkClasses = "test";
  links = [
    { name: 'About me', url: '/' },
    { name: 'Notes', url: '/notes' }
  ];

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

}
