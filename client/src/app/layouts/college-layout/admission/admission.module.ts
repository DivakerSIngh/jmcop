import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { IndexComponent } from './index/index.component';
import { MatButtonModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatCheckboxModule ,MatSnackBarModule,  MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,MatFormFieldModule,MatInputModule ,MatSnackBarModule,MatProgressSpinnerModule,
    AdmissionRoutingModule,FormsModule,MatRadioModule,MatCheckboxModule,
    ReactiveFormsModule,
  ],
  declarations: [IndexComponent]
})
export class AdmissionModule { }
