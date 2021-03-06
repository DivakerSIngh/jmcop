import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeLayoutRoutingModule } from './college-layout-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SliderModule } from 'ngx-slider';
import { OwlModule } from 'ngx-owl-carousel';
import { SlickModule } from 'ngx-slick';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [
    CommonModule,SliderModule,
   // OwlModule,
    SlickCarouselModule,
   // SlickModule.forRoot(),
    RouterModule.forChild(CollegeLayoutRoutingModule),
  ],
  declarations: [HomeComponent]
})
export class CollegeLayoutModule { }
