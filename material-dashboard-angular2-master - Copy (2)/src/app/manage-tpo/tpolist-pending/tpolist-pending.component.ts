import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { TPO } from '../../models/tpo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tpolist-pending',
  templateUrl: './tpolist-pending.component.html',
  styleUrls: ['./tpolist-pending.component.scss']
})
export class TPOListPendingComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
  private list: TPO[] = [];
  p:number = 1;
  searchtext:any;
  ngOnInit() {
    this.http.get<{ tpolist: [], list: TPO[] }>("http://localhost:3000/api/listTPO").subscribe(responseData => {
      this.list = responseData.tpolist;
    });
  }
  changestatus(id: string) {
    this.http.get<{ message: string }>("http://localhost:3000/api/statustoactive/" + id).subscribe(responseData => {
    });
    this.route.navigateByUrl("/tpolistpending");
    this.http.get<{ tpolist: [], list: TPO[] }>("http://localhost:3000/api/listTPO").subscribe(responseData => {
      this.list = responseData.tpolist;
    });
  }
}
