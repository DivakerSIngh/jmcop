import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ApiService } from "../../../../service/api.service";
import * as constants from '../../../../service/apiConfig';
import { LoaderService } from 'app/service/loader.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  facultyList:any=[];
  frm = new FormGroup({
    //email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    name: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    qualification: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])

  })
  constructor(private loader:LoaderService,  private elementRef: ElementRef,private snackBar:MatSnackBar, private router: Router, private http: ApiService) {
    this.getAll();
  }

  ngOnInit() {

  }

  getAll(){
    debugger
      var result = this.http.httpGet(constants.facultyList);
      result.subscribe((response) => {
        if (response.status == 200) {
          debugger
          this.facultyList=response.result;
        } else {
       
        }
  
      })
   
  }
  submit(){

    debugger
  if (this.frm.valid) {
    // let  = {
    //   email: this.frm.value.email, password: this.frm.value.password
    // }
    var result = this.http.httpPostLogin(constants.addFaculty, this.frm.value);
    result.subscribe((response) => {
      if (response.status == 200) {
        debugger
        this.frm.reset;
        this.frm.pristine;
        this.getAll();
      } else {
     
      }

    })
  }
  else {
    Object.keys(this.frm.controls).forEach((item) => {
      this.frm.get(item).markAsDirty();
      this.frm.get(item).markAsTouched();
    })
  }
  }
}
