import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { audit, first } from 'rxjs';
import { Book } from './book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FirstEvoApp';

  books: Book[]=[
    {

      name: 'CaptainsDaughter',
      author:'Pushkin'
    },
    {

      name: 'DogsHeart',
      author:'Bulgakov'
    },
    {

      name: 'Mtsyri',
      author:'Lermontov'
    }
  ];

  create_book={
    name: null,
    author: null
  }

  createBook(){
    this.books.push({
      name: this.create_book.name,
      author: this.create_book.author,
  })
  }

  
}
