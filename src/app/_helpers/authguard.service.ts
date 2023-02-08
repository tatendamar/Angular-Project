
import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor( private tokenStorage: TokenStorageService,private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }

    canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
