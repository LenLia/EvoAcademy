import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Authoriz } from 'src/app/interface/authoriz';
import { ApiService } from 'src/app/service/api.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent{
  constructor(public loginService: LoginService, private formBuilder: FormBuilder, private router: Router, public api: ApiService) {
    this.signInForm =this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  invalidLogin: boolean = false;
  signInForm : FormGroup;

 /* loginA() {
      username: this.loginForm.controls.username.value
      password: this.loginForm.controls.password.value

    this.loginService.login(username, password).subscribe(resp =>{
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/']);
    })
    
  }*/
  signIN(){
    this.loginService.getUserProfile(this.signInForm.value)
  }


  getUsers(){
    this.api.getUsersAll().subscribe({
      next: (res) =>{
        console.log(res)
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })
  }


}
