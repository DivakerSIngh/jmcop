import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../admin-layout/admin/dashboard/dashboard.component';
import { UserProfileComponent } from '../admin-layout/admin/user-profile/user-profile.component';
import { TableListComponent } from '../admin-layout/admin/table-list/table-list.component';
import { TypographyComponent } from '../admin-layout/admin/typography/typography.component';
import { IconsComponent } from '../admin-layout/admin/icons/icons.component';
import { MapsComponent } from '../admin-layout/admin/maps/maps.component';
import { NotificationsComponent } from '../admin-layout/admin/notifications/notifications.component';
import { UpgradeComponent } from '../admin-layout/admin/upgrade/upgrade.component';
import { FacultyComponent } from '../admin-layout/admin/faculty/faculty.component';
import { BannerComponent } from '../admin-layout/admin/banner/banner.component';
import { CourseComponent } from '../admin-layout/admin/course/course.component';
import { AcademicsComponent } from '../admin-layout/admin/academics/academics.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,MatGridListModule,MatProgressSpinnerModule,MatPaginatorModule
} from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AdmissionFormComponent } from './admin/admission-form/admission-form.component';
import { StudentFormComponent } from './admin/student-form/student-form.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { EventsComponent } from './admin/events/events.component';
import { LibraryComponent } from './admin/library/library.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatGridListModule,MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz17uV4GBRwRhEq7fodPHy5WR5-Ho0hmg'
    })
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    FacultyComponent,
    BannerComponent,
    CourseComponent,
    AcademicsComponent,
    AdmissionFormComponent,
    StudentFormComponent,
    GalleryComponent,
    EventsComponent,
    LibraryComponent
    
  ]
})

export class AdminLayoutModule {}
