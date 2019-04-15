import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  declarations: [IndexComponent]
})
export class DepartmentModule { }
