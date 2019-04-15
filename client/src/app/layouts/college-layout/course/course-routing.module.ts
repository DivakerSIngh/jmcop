import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BPharmaComponent } from './b-pharma/b-pharma.component';
import { DPharmaComponent } from './d-pharma/d-pharma.component';

const routes: Routes = [
  { path: '',   component: BPharmaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
