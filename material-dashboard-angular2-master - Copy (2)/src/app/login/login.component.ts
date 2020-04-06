import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {SessionService} from '../session.service'
import { LoginData } from 'app/models/logindata';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router,private session:SessionService) { }
  message = "";
  email:any;
  type:any;
  id:any;
  list:LoginData;
  ngOnInit() {
  }
  login(form: NgForm) {
    const login = {
      email: form.value.email,
      password: form.value.password,
      type:form.value.type
    }
    this.http.post<{ email: string, password: string, message: string, type :string,list:LoginData,id:string}>("http://localhost:3000/login", login).subscribe(responseData => {
      this.message = responseData.message;
      this.email=responseData.list.email;
      this.type=responseData.list.type;
      this.id=responseData.list._id;
      if (this.message == "Successful") { 
        this.session.saveInLocal("id",this.id);
        this.session.saveInLocal("type",this.type);
         this.session.saveInLocal("email",this.email);
        this.route.navigateByUrl("/dashboard"); }
      else { 
        this.route.navigateByUrl("/login");
      }
    });

  }

}
