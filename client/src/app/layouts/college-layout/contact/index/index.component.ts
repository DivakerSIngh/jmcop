import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { LoaderService } from 'app/service/loader.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 29.135060;
  lng: number = 78.268870;
  frm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    mobile:new FormControl('', [Validators.required]),

  })
  constructor(private service:ApiService,private httpClient:HttpClient,private snackBar:MatSnackBar) { 
   

  }

  ngOnInit() {
  }

  send(){
    debugger
    this.service.httpPost(constants.sendEnquiry, this.frm.value).subscribe((response) => {
      if (response.code ==200) {
       this.openSnackBar("Your inquirey has been submitted we will contact you soon.");
      } else {
    
      }
    })

  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1800
    });
  }
}
