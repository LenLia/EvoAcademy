import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title1 = 'FirstEvoApp';

  constructor(private meta: Meta){
    this.meta.addTag({name: 'description', content: 'root_desc'});
  }

  ngOnInit(): void {

  }
}
