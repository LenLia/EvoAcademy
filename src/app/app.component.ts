import { Component, OnInit } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstEvoApp';

  constructor(public respServ: ResponseService){}
  
  ngOnInit(): void {
  }

}
