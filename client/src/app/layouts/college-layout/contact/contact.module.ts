import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import { IndexComponent } from './index/index.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz17uV4GBRwRhEq7fodPHy5WR5-Ho0hmg'
    })
  ],
  declarations: [IndexComponent]
})
export class ContactModule { }
