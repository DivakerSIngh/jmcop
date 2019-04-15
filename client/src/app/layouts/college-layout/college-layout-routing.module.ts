import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../college-layout/home/home.component";



export const CollegeLayoutRoutingModule: Routes = [
  { path: '',   component: HomeComponent }
  
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CollegeLayoutRoutingModule { }
