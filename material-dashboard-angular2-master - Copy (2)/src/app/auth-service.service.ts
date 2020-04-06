import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { SessionService } from './session.service';
@Injectable()
export class AuthService{
  constructor(
    private router: Router,private sessiondata:SessionService
  ) { }
  
  id: any = this.sessiondata.getFromLocal("id");
  
  isLoggedIn: boolean = false;
  public isAuthenticated(): boolean {
    console.log(this.id);
    if(this.id){
      this.isLoggedIn = true
    }
      if (this.isLoggedIn) {
        console.log(this.isLoggedIn)
        return true;
      } else {
        console.log(this.isLoggedIn)
        return false;
      }
   
    }
  }