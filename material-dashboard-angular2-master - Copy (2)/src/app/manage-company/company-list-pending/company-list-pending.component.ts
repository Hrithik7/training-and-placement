import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { TPO } from '../../models/tpo';
@Component({
  selector: 'app-company-list-pending',
  templateUrl: './company-list-pending.component.html',
  styleUrls: ['./company-list-pending.component.scss']
})
export class CompanyListPendingComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private list: TPO[] = [];
  p:number = 1;
  ngOnInit() {
    this.http.get<{ companylist: [], list: TPO[] }>("http://localhost:3000/api/listCompany").subscribe(responseData => {
      this.list = responseData.companylist;
    });

  }

}
