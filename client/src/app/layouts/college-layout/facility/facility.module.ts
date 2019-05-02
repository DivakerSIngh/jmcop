import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { CanteenComponent } from './canteen/canteen.component';
import { TransportComponent } from './transport/transport.component';
import { LibraryComponent } from './library/library.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { SportComponent } from './sport/sport.component';

@NgModule({
  imports: [
    CommonModule,
    FacilityRoutingModule
  ],
  declarations: [CanteenComponent, TransportComponent, LibraryComponent, ClassroomComponent, SportComponent]
})
export class FacilityModule { }
