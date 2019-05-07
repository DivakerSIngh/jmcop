import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { LoaderService } from 'app/service/loader.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  fileToUpload: File = null;
  formData = new FormData();
  imgURL:any;
  homeBanner:any=[];
  public progress: number;
  public message: string;
  tiles: Tile[];
  gallery: Tile[];
  bannerAllImages:any=[];
  @ViewChild('fileInput') fileInput:any;
  @ViewChild('fileInputgallery') fileInputgallery:any;
  
  constructor(private loader:LoaderService, private http: ApiService,private httpc: HttpClient) { }

  ngOnInit() {
    this.getAllGallery();
  }
  uploadFile($event){


  }
  selectEvent(event: any){
  
    
      this.fileToUpload  = event[0];

   
  }
  previewGal(files) {
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

  uploadGalToServer(type){

    this.uploadGal(this.fileToUpload,type); 
}

getAllGallery(){
  debugger
  this.http.httpGet(constants.getallBanner).subscribe((response) => {
    this.tiles=[];
    this.gallery=[];
    if (response.code ==200) {
     //this.gallery=response.result.filter(x=>x.Type==5);
     response.result.filter(x=>x.Type==5).forEach(element => {
        this.gallery.push({text: 'One', cols: 1, rows: 1, color: '#09c',url:element.ImgUrl,id:element.Id});
      });
    }
   
  })
}

removeGal(id){
  
  this.http.httpGet(constants.homeBannnerDelete+"id="+id).subscribe((response) => {
    
    if (response.code ==200) {
      this.getAllGallery();          
    }
  })
}
  uploadGal(file:any,type) {
    debugger
var url=constants.galleryUpload

    this.loader.display(true);
    let formData:FormData = new FormData();
    formData.append(file.name, file);
    var result = this.http.upload(formData,url);
    result.subscribe((response) => {
      
      if (response.status ==200) {
        debugger
        this.getAllGallery();      
       
        this.imgURL=null;
       
      } else {
        debugger
       
      }

    })

  }


 
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url:string,
  id:number
}

