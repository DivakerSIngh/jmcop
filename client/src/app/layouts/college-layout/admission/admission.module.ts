import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { IndexComponent } from './index/index.component';
import { MatButtonModule,MatFormFieldModule,MatInputModule ,MatSnackBarModule,  MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,MatFormFieldModule,MatInputModule ,MatSnackBarModule,MatProgressSpinnerModule,
    AdmissionRoutingModule
  ],
  declarations: [IndexComponent]
})
export class AdmissionModule { }
