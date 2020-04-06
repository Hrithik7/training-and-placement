import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { TPO } from '../../models/tpo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approve-tpo',
  templateUrl: './approve-tpo.component.html',
  styleUrls: ['./approve-tpo.component.scss']
})
export class ApproveTPOComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
  private list: TPO[] = [];
  ngOnInit() {
    this.http.get<{ tpolist: [], list: TPO[] }>("http://localhost:3000/api/approvedTPO").subscribe(responseData => {
      this.list = responseData.tpolist;
    });
  }
  changestatus(id: string) {
    this.http.get<{ message: string }>("http://localhost:3000/api/statustopending/" + id).subscribe(responseData => {
    });
    this.route.navigateByUrl("/approvedtpo");
    this.http.get<{ tpolist: [], list: TPO[] }>("http://localhost:3000/api/approvedTPO").subscribe(responseData => {
      this.list = responseData.tpolist;
    });
  }
}
