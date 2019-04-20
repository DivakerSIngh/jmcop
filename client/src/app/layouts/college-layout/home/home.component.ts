import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';
// import { OwlCarousel } from "ngx-owl-carousel";
import {ApiService} from '../../../service/api.service';
import * as constants from '../../../service/apiConfig';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  courseList:any=[];
  public slider = new Slider();
  public sliderData=[];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1400
};
  constructor(private _apiService:ApiService) { 
    this.GetHomeBanner();  
    this.getCourse();
  }

  //#region  slick slider data and event
  
    //#endregion
  myarray=[];
  GetHomeBanner(){
    this._apiService.httpGet(constants.getallBanner).subscribe((response) => {
      if (response.status == 200) {
        this.sliderData=response.result.filter(x=>x.type==1);
      }
    })
  }
  getCourse(){
    debugger
    this._apiService.httpGet(constants.getAllCourse+"pageNumber=0&pageSize=100").subscribe((response) => {
      if (response.status == 200) {
        this.courseList=response.result;
      }
    })
  }
  getEvents(){
    this._apiService.httpGet(constants.getAllCourse).subscribe((response) => {
      if (response.status == 200) {
        this.courseList=response.result;
      }
    })
  }

  ngOnInit() {
    
  }
  

}
