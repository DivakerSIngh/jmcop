import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule
  ],
  declarations: [IndexComponent]
})
export class FacultyModule { }
