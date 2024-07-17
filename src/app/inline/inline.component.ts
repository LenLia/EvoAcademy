import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit{
  constructor(private meta: Meta){
  }

  ngOnInit(): void {
    this.meta.addTag({name: 'title', content: 'The Rock'});
    this.meta.addTag({name: 'type', content: 'video.movie'});
    this.meta.addTag({name: 'url', content: '//www.imdb.com/title/tt0117500/'});
  }

}
