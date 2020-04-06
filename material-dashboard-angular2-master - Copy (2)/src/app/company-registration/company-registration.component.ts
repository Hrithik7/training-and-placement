import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }
selectedlogo :String ="";
selectedcerti :String ="";
private base64textString:String="";
ngOnInit() {
   }
onSelectedcerti(evt){
  var files = evt.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handlecertiReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
}
}
_handlecertiReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.selectedcerti= btoa(binaryString);
        
}

onSelectedlogo(evt)
{
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var logoreader = new FileReader();
  
      logoreader.onload = this._handlelogoReaderLoaded.bind(this);
  
      logoreader.readAsBinaryString(file);
  }
}
  _handlelogoReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.selectedlogo= btoa(binaryString);
          
} 
 
  addCompany(form: NgForm) {
    // const logo=new FormData();
    // const registercerti=new FormData();
    // logo.append('image',this.selectedlogo,this.selectedlogo.name);
    // registercerti.append('file',this.selectedcerti,this.selectedcerti.name);
    const Company = {
      name: form.value.name,
      Company_type: form.value.companytype,
      logo: this.selectedlogo,
      about: form.value.about,
      registrationCerti: this.selectedcerti,
      registrationNo: form.value.registrationNo,
      email: form.value.email,
      password: form.value.tempPass,
      mobile_no: form.value.mobileNo,
      city: form.value.city,
      state: form.value.state,
      postal_code: form.value.postalCode,
      address: form.value.address

    }
    this.http.post<{
      name: String,
      mobile_no: String,
      address: String,
      city: String,
      state: String,
      postal_code: String,
      password: String,
      email: String,
      registrationCerti: String,
      registrationNo: String,
      logo: String,
      about: String,
      Company_type: String
    }>('http://localhost:3000/api/registerCompany', Company).subscribe(responseData => {
    });
    this.route.navigateByUrl('/login');
  }
} 