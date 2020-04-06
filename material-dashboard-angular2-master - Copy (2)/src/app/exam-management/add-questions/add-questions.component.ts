import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data = { };
  public formDataList = [];

  addItem($item){
      this.formDataList.push($item)
      this.data = {};
   }

  removeItem($item){
      this.formDataList.splice( this.formDataList.indexOf($item),1)

   }

}
