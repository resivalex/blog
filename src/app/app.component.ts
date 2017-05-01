import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! woop, woop.';
  name:string = 'Ivan';
  phone = {
    brand: "iPhone",
    date: "2014 Semtember"
  }

  yell(e) {
    console.log("I'm yelling", e, this.phone);
    this.phone.brand = "Hi. Hi."
  }
}
