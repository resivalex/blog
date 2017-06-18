import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  router: Router;
  links = [
    { name: 'Profile', url: '/' },
    { name: 'Notes', url: '/notes' }
  ];

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

}
