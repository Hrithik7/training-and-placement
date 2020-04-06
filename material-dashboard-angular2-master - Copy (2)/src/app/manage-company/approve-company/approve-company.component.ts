import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { TPO } from '../../models/tpo';

@Component({
  selector: 'app-approve-company',
  templateUrl: './approve-company.component.html',
  styleUrls: ['./approve-company.component.scss']
})
export class ApproveCompanyComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private list: TPO[] = [];
  count = 1;
  ngOnInit() {
    this.http.get<{ companylist: [], list: TPO[] }>("http://localhost:3000/api/approvedCompany").subscribe(responseData => {
      this.list = responseData.companylist;
    });

  }

}
