import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  addTPO(form: NgForm) {
    const TPO = {
      fullname: form.value.fullname,
      email: form.value.email,
      password: form.value.password,
      mobile_no: form.value.mobile_no,
      city: form.value.city,
      state: form.value.state,
      postal_code: form.value.postal_code,
      address: form.value.address
    }
    this.http.post<{
      fullname: String,
      mobile_no: String,
      address: String,
      city: String,
      state: String,
      postal_code: String,
      password: String,
      email: String,
    }>("http://localhost:3000/api/registerTPO", TPO).subscribe(responseData => {
    });
    this.route.navigateByUrl("/login");
  }
}
