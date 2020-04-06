import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  constructor() { }
  selectedresume :String ="";
  selectedprofile :String ="";
  private base64textString:String="";
  ngOnInit() {
     }
  onSelectedresume(evt){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();
  
      reader.onload =this._handleresumeReaderLoaded.bind(this);
  
      reader.readAsBinaryString(file);
  }
  }
  _handleresumeReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.selectedresume= btoa(binaryString);
          console.log(this.selectedresume);
  }
  
  onSelectedprofile(evt)
  {
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var logoreader = new FileReader();
    
        logoreader.onload = this._handleprofileReaderLoaded.bind(this);
    
        logoreader.readAsBinaryString(file);
    }
  }
    _handleprofileReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.selectedprofile= btoa(binaryString);
            console.log(this.selectedprofile);
  } 

}
