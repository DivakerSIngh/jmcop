import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { NoticeComponent } from './notice/notice.component';

@NgModule({
  imports: [
    CommonModule,
    AcademicsRoutingModule
  ],
  declarations: [NoticeComponent]
})
export class AcademicsModule { }
