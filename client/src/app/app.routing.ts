import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CollegeLayoutComponent } from './layouts/college-layout/college-layout.component';
import { LoginComponent } from './account/login/login.component';
import { LoginAuthGuard } from './service/login-auth-guard';
import { AuthGuard } from './service/auth-guard.service';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: CollegeLayoutComponent,
    children: 
    [{path: '',loadChildren: './layouts/college-layout/college-layout.module#CollegeLayoutModule'}]}, 

    {
      path: 'about',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/about/about.module#AboutModule'}]
    },
    {
      path: 'course',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/course/course.module#CourseModule'}]
    },
    {
      path: 'department',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/department/department.module#DepartmentModule'}]
    },
    {
      path: 'faculty',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/faculty/faculty.module#FacultyModule'}]
    },

     {
      path: 'academics',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/academics/academics.module#AcademicsModule'}]
    },
    {
      path: 'admission',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/admission/admission.module#AdmissionModule'}]
    },
    {
      path: 'gallery',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/gallery/gallery.module#GalleryModule'}]
     
    },
    {
      path: 'facility',
      component: CollegeLayoutComponent,
      children: 
      [{path: '',loadChildren: './layouts/college-layout/facility/facility.module#FacilityModule'}]
     
    },
    {
      path: 'contact',
      component: CollegeLayoutComponent,
      children: 
       [{path: '',loadChildren: './layouts/college-layout/contact/contact.module#ContactModule'}]
      
    },

  
  {path: 'login',component: LoginComponent,canActivate: [LoginAuthGuard] },
  {path: 'admin',component: AdminLayoutComponent,canActivate: [AuthGuard] ,   children: [{path: '',loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
