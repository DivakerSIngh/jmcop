import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { LoaderService } from 'app/service/loader.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
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
    this.getAllHomePageBanner();
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

uploadToServer(type){

    this.uploadFileToActivity(this.fileToUpload,type); 
}

getAllHomePageBanner(){
  
  this.http.httpGet(constants.getallBanner).subscribe((response) => {
    this.tiles=[];
    this.gallery=[];
    if (response.code ==200) {
     this.bannerAllImages=response.result;
     this.bannerAllImages.forEach(element => {
       if(element.Type==1){
        this.tiles.push({text: 'One', cols: 1, rows: 1, color: '#f05a66',url:element.ImgUrl,id:element.Id});
       }
       if(element.Type==5){
        this.gallery.push({text: 'One', cols: 1, rows: 1, color: '#f05a66',url:element.ImgUrl,id:element.Id});
       }
      });
    }
   
  })
}

remove(id){
  
  this.http.httpGet(constants.homeBannnerDelete+"id="+id).subscribe((response) => {
    
    if (response.code ==200) {
      this.getAllHomePageBanner();          
    }
  })
}
  uploadFileToActivity(file:any,type) {
    
var url=constants.bannerUpload
switch (type) {
  case 1:
  url=constants.bannerUpload
    break;

    case 2:
    url=constants.bannerUpload
      break;

      case 3:
      url=constants.bannerUpload
        break;

        case 4:
        url=constants.bannerUpload
          break;
          case 5:
          url=constants.galleryUpload
            break;
  default:
    break;
}

    this.loader.display(true);
    let formData:FormData = new FormData();
    formData.append(file.name, file);
    var result = this.http.upload(formData,url);
    result.subscribe((response) => {
      
      if (response.code ==200) {
        debugger
        this.getAllHomePageBanner();      
        this.loader.display(false);
        this.imgURL=null;
       
      } else {
        debugger
       // this.loader.display(false);
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
