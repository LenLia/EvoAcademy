import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstEvoApp';
  constructor(private dataService: DataService){}

  todos: object[]=[]

  ngOnInit(): void {
      this.dataService.getTodos().subscribe({
        next: (resp: any) =>{
          this.todos=resp;
          console.log(resp)
        },
        error: (err: HttpErrorResponse) =>{console.log(err.error)}
      })
  }

}
