import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getAllComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments',{params: {'postId': 1}})
  }

  postAllPosts(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{'body': ''})
  }

  getAllPostsHeaders(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{headers:{'X-Test': '1'}, responseType: 'text'})
  }

  deletePosts(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  getOnePosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }


}
