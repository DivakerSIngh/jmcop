import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ],
  declarations: [IndexComponent]
})
export class AdmissionModule { }
