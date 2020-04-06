import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  addcollege(form: NgForm) {
    // console.log(form.value.college);
    const Designation = { Designation_name: form.value.Designation }
    console.log(Designation);
    this.http.post<{
      Designation_name: String,
    }>("http://localhost:3000/api/addcollege", Designation).subscribe(responseData => {
    });
  }
}
