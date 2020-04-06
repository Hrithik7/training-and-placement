import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth-service.service';
@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router,private sessiondata:SessionService) { } canActivate(route: ActivatedRouteSnapshot): boolean {    // this will be passed from the route config
      // on the data property
      const expectedRole = route.data.expectedRole;
      var a=0;
      console.log(expectedRole);

      var roles:string;
      const role = this.sessiondata.getFromLocal("type");
      if (!this.auth.isAuthenticated()) {
        this.router.navigateByUrl('/login');
        return false;
      }
      else{
        for(roles of expectedRole)
        {
          a=0;
        if (role+'' === roles) {
          console.log(role);
          console.log(roles);
          return true;
          a=1;
          
        }
        return false;
      }
      // if(a=0)
      // {
      //   this.router.navigateByUrl('/dashboard');
      //   return false;
      // }
      // else{
      //   a = 0;
      //   return true;
        
      // }
      }
      
    }
}