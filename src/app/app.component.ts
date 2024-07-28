import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { addToDO } from 'src/store/model/todo.model';
import { TodoState } from 'src/store/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FirstEvoApp';
   oneTodos : string=''
  constructor(private store: Store  ){}

  currentTodo= this.store.selectSnapshot(TodoState.getTodo)

  ngOnInit(){
    console.log(this.store.selectSnapshot(TodoState.getTodo))

    this.store.select(TodoState.getTodo).subscribe({
      next: (value) => {
        this.currentTodo=value
      }
    })
  }

  addToDOs() {
    this.store.dispatch(new addToDO(this.oneTodos));
    this.oneTodos=''
  }
  @Select(TodoState.getTodo) array$: Observable<string[]> | undefined;
}
