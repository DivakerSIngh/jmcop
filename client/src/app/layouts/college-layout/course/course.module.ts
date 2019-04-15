import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { BPharmaComponent } from './b-pharma/b-pharma.component';
import { DPharmaComponent } from './d-pharma/d-pharma.component';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  declarations: [BPharmaComponent, DPharmaComponent]
})
export class CourseModule { }
