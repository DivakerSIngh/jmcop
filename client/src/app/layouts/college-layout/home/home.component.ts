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
  public slider = new Slider();
  public sliderData=[];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500
};
  constructor(private _apiService:ApiService) { 
    this.GetHomeBanner();  
  }

  GetHomeBanner(){
    this._apiService.httpGet(constants.getallBanner).subscribe((response) => {
      debugger
      if (response.status == 200) {
        this.sliderData=response.result;
      }
    })
  }

  ngOnInit() {
    // this.slider.items = slideItems;
    // const slideItems = [
    //   { src: '../../../../assets/img/college/slider/1.jpg', title: '' },
    //   { src: '../../../../assets/img/college/slider/2.jpg', title: '' },
    //   { src: '../../../../assets/img/college/slider/3.jpg', title: '' },
    //   { src: '../../../../assets/img/college/slider/4.jpg', title: '' },
    //   { src: '../../../../assets/img/college/slider/5.jpg', title: '' },
    // ];
 
    // this.slider.items = slideItems;



    
  }
  

}
