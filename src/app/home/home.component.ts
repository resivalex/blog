import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "Castle";
  title = "Welcom to home";
  phones = [
    { date: "2016", brand: "Samsung", color: 'blue' },
    { date: '2017', brand: 'iPhone', color: 'black' },
    { date: '2017', brand: 'Xiomi', color: 'darkgreen' }
  ];
  // @Input() phone;
  @Output() onYell = new EventEmitter();

  log(val) {
    console.log("test, " + val);
  }

  fireYellEvent(e) {
    console.log("Fire!");
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
