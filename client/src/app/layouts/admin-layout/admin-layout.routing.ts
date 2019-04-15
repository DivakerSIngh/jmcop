import { Routes } from '@angular/router';

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


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
    { path: 'course',     component: CourseComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'homemanagement',        component: BannerComponent },
    { path: 'faculty',        component: FacultyComponent },
    { path: 'academics',        component: AcademicsComponent },
    
    
      
];
