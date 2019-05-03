import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { LoaderService } from 'app/service/loader.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  fileToUpload: File = null;
  formData = new FormData();
  imgURL:any;
  homeBanner:any=[];
  public progress: number;
  public message: string;
  tiles: Tile[];
  events: Tile[];
  bannerAllImages:any=[];
  @ViewChild('fileInput') fileInput:any;
  @ViewChild('fileInputevents') fileInputevents:any;
  
  constructor(private loader:LoaderService, private http: ApiService,private httpc: HttpClient) { }

  ngOnInit() {
    this.getAllHomePageBanner();
  }
  uploadFile($event){


  }
  selectEvent(event: any){
  
    
      this.fileToUpload  = event[0];

   
  }
  previewEve(files) {
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

getAllHomePageBanner(){
  
  this.http.httpGet(constants.getallBanner).subscribe((response) => {
    this.tiles=[];
    this.events=[];
    if (response.code ==200) {
     //this.events=response.result.filter(x=>x.Type==5);
     response.result.filter(x=>x.Type==5).forEach(element => {
       if(element.type==5){
        this.events.push({text: 'One', cols: 1, rows: 1, color: '#f05a66',url:element.imgUrl,id:element.id});
       }
      });
    }
   
  })
}

removeGal(id){
  
  this.http.httpGet(constants.homeBannnerDelete+"id="+id).subscribe((response) => {
    
    if (response.code ==200) {
      this.getAllHomePageBanner();          
    }
  })
}
  uploadGal(file:any,type) {
    
var url=constants.eventsUpload

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
        this.loader.display(false);
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