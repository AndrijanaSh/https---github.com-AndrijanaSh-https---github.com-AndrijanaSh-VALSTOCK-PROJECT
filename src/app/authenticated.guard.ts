import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router,
    private userService: UserService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.userService.isLoggedIn();



    const isLoginRoute = route.routeConfig?.path === 'login';
    console.log({ isLoggedIn, isLoginRoute, a: route.routeConfig?.path });

    if (isLoginRoute && isLoggedIn) {
      return this.router.createUrlTree(['/dashboard'])
    }

    if (!isLoginRoute && !isLoggedIn) {
      return this.router.createUrlTree(['/login'])
    }

    return isLoginRoute ? !isLoggedIn : isLoggedIn;
  }

}
