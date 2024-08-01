import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoUsers } from '../interface/info-users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsersAll(){
    return this.http.get('https://evo-academy.wckz.dev/api/cooking-blog/users')
  }

  getUsersOne(id: string){
    return this.http.get(`https://evo-academy.wckz.dev/api/cooking-blog/users/${id}`)
  }

  postUserCreate(){
    return this.http.get('https://evo-academy.wckz.dev/api/cooking-blog/users/create')
  }

  getPostsAll(){
    return this.http.get('https://evo-academy.wckz.dev/api/cooking-blog/posts')
  }

  getUsersSign(){
    return this.http.post('https://evo-academy.wckz.dev/api/cooking-blog/users/sign',{})
    
  }
  
}