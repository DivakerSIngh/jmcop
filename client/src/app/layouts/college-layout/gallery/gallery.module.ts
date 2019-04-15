import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from 'ngx-slider';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,SliderModule,NgxImageGalleryModule
  ],
  declarations: [IndexComponent]
})
export class GalleryModule { }
