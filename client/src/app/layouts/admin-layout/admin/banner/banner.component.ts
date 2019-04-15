import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  fileToUpload: File = null;
  formData = new FormData();
  imgURL:any;
  public progress: number;
  public message: string;
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: '#f05a66',url:''},
    {text: 'Two', cols: 1, rows: 1, color: '#f05a66',url:''},
    {text: 'Three', cols: 1, rows: 1, color: '#f05a66',url:''},
    {text: 'Four', cols: 1, rows: 1, color: '#f05a66',url:''},
  ];
  @ViewChild('fileInput') fileInput:any;
  constructor( private http: ApiService,private httpc: HttpClient) { }

  ngOnInit() {
  }
  uploadFile($event){


  }
  selectEvent(event: any){
  
    
      this.fileToUpload  = event[0];

   
  }
  preview(files) {
    if (files.length === 0)
      return;
 
      this.fileToUpload=files[0];
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

uploadToServer(){

    this.uploadFileToActivity(this.fileToUpload); 
}

  uploadFileToActivity(file:any) {
    debugger
 // if (files.length === 0)
  //   return;

  // const formData = new FormData();

  // for (let file of files)
  //   formData.append(file.name, file);


    let formData:FormData = new FormData();
    formData.append(file.name, file);
    var result = this.http.upload(formData,constants.bannerUpload);
    result.subscribe((response) => {
      debugger
      if (response.status == 200) {
        debugger
       
       
      } else {
     
      }

    })

  }
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url:string
}
