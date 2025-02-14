import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { } canActivate(): boolean {
      console.log(!this.auth.isAuthenticated())
      if (!this.auth.isAuthenticated()) {

        this.router.navigateByUrl('/login');
        return false;
      }
      return true;
    }
}
