import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ApiService } from "../../service/api.service";
import { LoaderService } from 'app/service/loader.service';
import * as constants from '../../service/apiConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginResponse: string;
  responseStatus = false;
  responseMessage: string;

  userForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required])

  })
  constructor(private loader:LoaderService,  private elementRef: ElementRef,private snackBar:MatSnackBar, private router: Router, private http: ApiService) {
    
  }

  ngOnInit() {
    var data=localStorage.getItem('userDetails');
    
        if(data!=undefined && data!=''){
          this.router.navigate(['/admin/dashboard'])
    
        }else{
          
        }
    
    //this.loader.display(true);
  }
  ngAfterViewInit(){
  //  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f05a66';
 }
//  login(){
// debugger
// //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
// this.router.navigate(["/admin"]);
//  }


login() {
  debugger
  if (this.userForm.valid) {
    let loginData = {
      email: this.userForm.value.email, password: this.userForm.value.password
    }
    var result = this.http.httpPostLogin(constants.loginUrl, loginData);
    result.subscribe((response) => {
      if (response.code ==200) {
        
        localStorage.setItem('userDetails',JSON.stringify(response.result));
        localStorage.setItem('name', response.result.name);
        localStorage.setItem('email', response.result.email);
       // localStorage.setItem('user-access', JSON.stringify(response.data));
        this.router.navigate(['/admin/dashboard'])
      } else {
     
      }

    })
  }
  else {
    Object.keys(this.userForm.controls).forEach((item) => {
      this.userForm.get(item).markAsDirty();
      this.userForm.get(item).markAsTouched();
    })
  }

}

keyup($event) {
  this.responseMessage = '';
}
}