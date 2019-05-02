import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanteenComponent } from './canteen/canteen.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { LibraryComponent } from './library/library.component';
import { TransportComponent } from './transport/transport.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  { path: 'canteen',   component: CanteenComponent },
  { path: 'classroom',   component: ClassroomComponent },
  { path: 'library',   component: LibraryComponent },
  { path: 'transport',   component: TransportComponent },
  { path: 'sport',   component: SportComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
