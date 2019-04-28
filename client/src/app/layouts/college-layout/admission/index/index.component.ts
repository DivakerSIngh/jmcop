import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoaderService } from 'app/service/loader.service';
import { MatSnackBar } from '@angular/material';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
 
  pageMode="add";
  frm:any=FormGroup;
  
  items: FormArray;



  constructor(private formBuilder: FormBuilder,private loader:LoaderService,private snackBar:MatSnackBar,private http: ApiService) { 

    this.frm = new FormGroup({   
      candidatename: new FormControl('', [Validators.required]),
      fathername: new FormControl('', [Validators.required]),
      mothername: new FormControl('', [Validators.required]),
      mobile:  new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      address:  new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city:  new FormControl('', [Validators.required])  ,
      coursetype:  new FormControl(1, [Validators.required])  ,
      items: this.formBuilder.array([ this.createItem() ])
    })

  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      sclass: '',
      yearofpassing: '',
      subjects: '',
      boards: ''
    });
  }

  addItem(): void {
    this.items = this.frm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  ngOnInit() {
    this.addItem();
    // for (let index = 0; index < 3; index++) {
    //   this.addItem();
    // }
    
   
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }
  submit(){
    debugger
    if(this.frm.valid){
      this.http.httpPost(constants.admisionForm, this.frm.value).subscribe((response) => {
        if (response.code ==200) {
         this.openSnackBar("Your has been submit successfull");
        } else {
      
        }
      })
    }

  }
}
