import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

 constructor(private dataService: DataService){}

 getPosts(){
  this.dataService.getAllPosts().subscribe({
    next: (response:any) => {
      console.log(response)
    }
  })
 }

 getComments(){
  this.dataService.getAllComments().subscribe({
    next: (response) =>{
      console.log(response)
    }
  })
 }

 createPost(){
  this.dataService.postAllPosts().subscribe({
    next: (response) =>{
      console.log(response)
    }
  })
 }

 getError(){
  this.dataService.getAllPosts().subscribe({
    next: (response) =>{console.log(response)},
    error: (err: HttpErrorResponse) =>{
      console.error('Error...',err)
    }
  })
 }

 getHeaders(){
  this.dataService.getAllPostsHeaders().subscribe({
    next: (response) =>{console.log(response)}
  })
 }

 deletePosts(){
  this.dataService.deletePosts().subscribe({
    next: (response) =>{console.log(response)}
  })
 }

 
}
