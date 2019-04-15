import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  
  public slider = new Slider();
  constructor() { 
    this.slider.config.loop = true;
    this.slider.config.showPreview = true;
    this.slider.config.numberOfPreview=4;
    
  }

  ngOnInit() {
    const slideItems = [
      { src: '../../../../assets/img/college/slider/1.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/2.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/3.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/4.jpg', title: '' },
      { src: '../../../../assets/img/college/slider/5.jpg', title: '' },
    ];
 
    this.slider.items = slideItems;


  }

}
