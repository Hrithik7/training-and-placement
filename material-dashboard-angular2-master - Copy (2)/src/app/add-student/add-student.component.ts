import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Student} from '../models/student'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  addstudent(form: NgForm) {
    const Student = {
     
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      enrollement_no:form.value.enrollementno,
      email: form.value.email,
      password: form.value.temppass,
      mobile_no: form.value.mobileno,
      
    }
    this.http.post<{
      firstname: String,
      lastname: String,
      enrollement_no:String,
      mobile_no: String,
      password: String,
      email: String,
    }>("http://localhost:3000/api/registerStudent", Student).subscribe(responseData => {
    });
    this.route.navigateByUrl("/add-student");
    form.reset();
  }
}


