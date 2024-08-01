import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from '../service/guard.service';
import { InfoRecipes } from '../interface/info-recipes';
import { InfoUsers } from '../interface/info-users';

@Injectable({
  providedIn: 'root'
})
export class AccessRoleGuard implements CanActivate {

  private user!: InfoUsers;

  constructor(private guardService: GuardService, private router: Router){


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.guardService.role ==='user'||'admin')
      return true;
    else return this.router.navigateByUrl('/error')
  }
  
}
