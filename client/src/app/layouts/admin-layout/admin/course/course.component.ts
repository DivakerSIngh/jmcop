import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from "../../../../service/api.service";
import * as constants from '../../../../service/apiConfig';
import { LoaderService } from 'app/service/loader.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  pageMode="add";
  courseList=[];
  length = 100;
  pageSize = 5;
  pageIndex=0;
  pageSizeOptions = [5, 10, 25, 100];
  pageNumber:number=0;


  frm = new FormGroup({
    //email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
   
    name: new FormControl('', [Validators.required]),
    seates: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    id: new FormControl('')
  })
  constructor(private loader:LoaderService,  private elementRef: ElementRef,private snackBar:MatSnackBar, private router: Router, private http: ApiService) {
   
    this.getAll();
  }

  ngOnInit() {

  }


  edit(req,id){
    this.pageMode='update'
    this.frm.setValue({
      id:req.id,
      name: req.name,
      seates: req.seates,
      description: req.description,
    })
  }

  delete(req,id){
    this.http.httpPostLogin(constants.deleteCourse, req).subscribe((response) => {
      if (response.code ==200) {
        this.getAll();
      } else {
     
      }

    })
  }

 
  loadMore(evt){

    this.pageNumber=evt.pageIndex
    this.pageSize=evt.pageSize;
        this.getAll();
  }

  getAll(){
      var result = this.http.httpGet(constants.getAllCourse+"pageNumber="+this.pageNumber+"&pageSize="+this.pageSize);
      result.subscribe((response) => {
        if (response.code ==200) {
          this.courseList=response.result;
          this.length=response.pages;
        } else {
       
        }
  
      })
   
  }
  submit(){
let index = this.frm.getRawValue().id
  if(index!="" && index != null) {
    this.courseList[index] = this.frm.value
    this.http.httpPostLogin(constants.updateCourse, this.frm.value).subscribe((response) => {
      if (response.code ==200) {
        this.getAll();
        this.pageMode='add';
      } else {
    
      }
    })
  } else {
    
      this.frm.value.id=0,
    
    this.http.httpPostLogin(constants.addCourse, this.frm.value).subscribe((response) => {
      if (response.code ==200) {
        this.getAll();
      } else {
    
      }
    })     
  }
  this.frm.reset();

  }
}


