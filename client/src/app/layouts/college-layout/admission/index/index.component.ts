import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  pageMode="add";
  frm = new FormGroup({
    //email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
   
    name: new FormControl('', [Validators.required]),
    seates: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    id: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }
  submit(){}
}
