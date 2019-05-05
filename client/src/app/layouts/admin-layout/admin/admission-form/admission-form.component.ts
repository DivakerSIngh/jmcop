import { Component, OnInit, ElementRef } from '@angular/core';
import { LoaderService } from 'app/service/loader.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {

  lst=[];
  length = 100;
  pageSize = 10;
  pageIndex=0;
  pageSizeOptions = [5, 10, 25, 100];
  pageNumber:number=0;
  imgURL:any;
  fileToUpload:any;
  constructor(private loader:LoaderService,  private elementRef: ElementRef,private snackBar:MatSnackBar, private router: Router, private http: ApiService) {
    this.getAll();
    
  }
  ngOnInit() {
  }

  loadMore(evt){

    this.pageNumber=evt.pageIndex
    this.pageSize=evt.pageSize;
        this.getAll();
      }
  getAll(){
    debugger
    var result = this.http.httpGet(constants.studentFormList+"pageNumber="+this.pageNumber+"&pageSize="+this.pageSize);
    result.subscribe((response) => {
      if (response.code ==200) {
        
        this.lst=response.result;
        this.length=response.pages;
      } else {
     
      }

    })
 
}


}
