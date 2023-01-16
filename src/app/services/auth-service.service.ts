import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginCheckService } from './login-check.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService implements CanActivate {
  constructor(private loginCheck: LoginCheckService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    //  throw new Error('Method not implemented.');
    if (this.loginCheck.loggedIn == true) return true;
    else {
      window.alert('You are not logged in... please login first...');
      return false;
    }
  }
}
