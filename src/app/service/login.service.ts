import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authoriz } from '../interface/authoriz';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = "https://evo-academy.wckz.dev/api/cooking-blog/users/sign";
  currentUser ={};

  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient,private router: Router) {
   const token= localStorage.getItem('access_token')
   }

  login(username: string |null ,password: string|null ){
    return this.http.post(this.uri, {username, password})
     // this.router.navigate([''])
      //localStorage.setItem('auth_token', resp.token)
     // console.log(resp.token)
    }

  logout(){
    localStorage.removeItem('token');
  }

  signUp(user: Authoriz){  //registracia
    return this.http.post(this.uri, user)
  }

  signIn(user: Authoriz){
    return this.http.post<any>(this.uri, user).subscribe((resp: any) =>{
      localStorage.setItem('access_token',resp.token);
      // this.getUserProfile(resp._id).subscribe((resp)=> {
      //   this.currentUser=resp;
      //   this.router.navigate(['/'])
      //   console.log(resp)
      // })
      })
  }

  getUserProfile(id: any){
    return this.http.get(`https://evo-academy.wckz.dev/api/cooking-blog/users/${id}`, {headers: this.headers}).pipe(
      map((res) => {
        return res || {};
      })
    );
  }

}
