import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from "../../../../service/api.service";
import * as constants from '../../../../service/apiConfig';
import { LoaderService } from 'app/service/loader.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  @ViewChild('fileInput') fileInput:any;
  pageMode='add'
  facultyList=[];
  length = 100;
  pageSize = 10;
  pageIndex=0;
  pageSizeOptions = [5, 10, 25, 100];
  pageNumber:number=0;
  imgURL:any;
  fileToUpload:any;

  frm = new FormGroup({
    //email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    name: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    qualification: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    id: new FormControl(''),
    imgUrl:new  FormControl('')

  })
  constructor(private loader:LoaderService,  private elementRef: ElementRef,private snackBar:MatSnackBar, private router: Router, private http: ApiService) {
    this.getAll();
  }

  ngOnInit() {
    this.imgURL='../../../../../assets/img/defaut.png';
  }
  loadMore(evt){

this.pageNumber=evt.pageIndex
this.pageSize=evt.pageSize;
    this.getAll();
  }

  edit(req,id){
    this.pageMode='update'
    this.frm.setValue({
      id:req.Id,
      name: req.Name,
      designation: req.Designation,
      qualification:req.Qualification,
      description: req.Description,
      imgUrl:req.ImgUrl,
    })
  }

  uploadAndPreview(files){
    
      if (files.length === 0)
        return;
        this.fileToUpload=files[0];
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
       // this.message = "Only images are supported.";
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }

      let formData:FormData = new FormData();
    formData.append(this.fileToUpload.name, this.fileToUpload);
    this.loader.display(true);
    var result = this.http.upload(formData,constants.facultyImage);
    result.subscribe((response) => {
      
      if (response.code ==200 && response.body) {
        this.imgURL=response.body.result;
        this.loader.display(false);
      }      
    })
    
  }
  delete(req,id){
   
    this.http.httpPostLogin(constants.deleteFaculty, req).subscribe((response) => {
      if (response.code ==200) {
        this.getAll();
      } else {
     
      }

    })
  }


  getAll(){
      var result = this.http.httpGet(constants.facultyList+"pageNumber="+this.pageNumber+"&pageSize="+this.pageSize);
      result.subscribe((response) => {
        if (response.code ==200) {
          
          this.facultyList=response.result;
          this.length=response.pages;
        } else {
       
        }
  
      })
   
  }
  

  submit(){
    
    let index = this.frm.getRawValue().id
      if(index!="" && index != null) {
        this.facultyList[index] = this.frm.value;
        this.frm.value.imgUrl=this.imgURL;
        this.http.httpPostLogin(constants.updateFaculty, this.frm.value).subscribe((response) => {
          if (response.code ==200) {
            this.getAll();
            this.pageMode='add';
          } else {
        
          }
        })
      } else {
        
          this.frm.value.id=0,
          this.frm.value.imgUrl= this.imgURL,
        
        this.http.httpPostLogin(constants.addFaculty, this.frm.value).subscribe((response) => {
          if (response.code ==200) {
            this.getAll();
          } else {
        
          }
        })     
      }
      this.frm.reset();
      this.imgURL='../../../../../assets/img/defaut.png';
    
      }
}


