import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from 'ngx-slider';
// import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  imports: [
    CommonModule,SlickCarouselModule,
    GalleryRoutingModule,SliderModule
  ],
  declarations: [IndexComponent]
})
export class GalleryModule { }
