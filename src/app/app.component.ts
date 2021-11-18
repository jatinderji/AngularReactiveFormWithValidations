import { Component } from '@angular/core';

// import FormGroup (for whole form) and FormControl (for specific control/input field) 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReactiveFormWithValidations';
  data: any;
  myForm = new FormGroup({
    uEmail : new FormControl('',Validators.email),
    uPass : new FormControl('',Validators.minLength(6))
  });

  getData(){
    this.data = this.myForm.value;
  }

  get uEmail()
  {
    return this.myForm.get("uEmail")
  }

  get uPass()
  {
    return this.myForm.get("uPass")
  }
}
