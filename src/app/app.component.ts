import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 date_now = new Date();
 switch_string= "Car";
 number_sum=123;
 array_cats = [ {name: 'Polosatic'}, {name: 'Richard'}, {name: 'Bitok'}];

}
