import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';
// import { OwlCarousel } from "ngx-owl-carousel";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'owl-carousel-with-angular6';

  carouselOptions = {
    margin: 25,
    nav: true,
    dots: true,
    
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  }
 
  images = [
    
    {
      text: "Morning Greens",
      image: "../../../../assets/img/college/slider/1.jpg"
    },
    {
      text: "Bunch of Love",
      image: "../../../../assets/img/college/slider/2.jpg"
    },
    {
      text: "Blue Clear",
      image: "../../../../assets/img/college/slider/3.jpg"
    },
    {
      text: "Evening Clouds",
      image: "../../../../assets/img/college/slider/4.jpg"
    }
   
  ]



  public slider = new Slider();
  
  constructor() { 
// console.log(this.mySlideImages)
// console.log(this.myCarouselImages)
// console.log(this.mySlideOptions)
// console.log(this.myCarouselOptions)
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
    this.slider.config.transitionDuration = 3;
    this.slider.config.previewWidth=100;
    this.slider.config.showTitle=false;
  
  }

  ngOnInit() {

    const slideItems = [
      { src: '../../../../assets/img/college/slider/1.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/2.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/3.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/4.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/5.jpg', title: '' },
      // { src: '../../../../assets/img/college/wall6.JPG', title: '' },
      // { src: '../../../../assets/img/college/wall7.JPG', title: '' },
      // { src: '../../../../assets/img/college/wall8.JPG', title: '' },
      // { src: '../../../../assets/img/college/wall9.JPG', title: '' },
      // { src: '../../../../assets/img/college/wall10.JPG', title: '' },
      // { src: '../../../../assets/img/college/wall11.JPG', title: '' },
      // { src: '../../../../assets/img/college/wall12.JPG', title: '' },
     
    ];
 
    this.slider.items = slideItems;



    
  }
  

}
