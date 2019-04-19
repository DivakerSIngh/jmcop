import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userdetails:any;
  frm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    name: new FormControl('', [Validators.required]),
    id: new FormControl('')

  })
  constructor() { 
debugger
  this.userdetails= JSON.parse(localStorage.getItem('userDetails'))
  this.frm.setValue({
    id:this.userdetails.id,
    name: this.userdetails.name,
    email: this.userdetails.email,
  })
   
  }

  ngOnInit() {
  }

}
