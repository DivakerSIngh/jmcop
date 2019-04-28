import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './layouts/admin-layout/admin/components/components.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoaderService } from "./service/loader.service";
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CollegeLayoutComponent } from './layouts/college-layout/college-layout.component';
import {  NavMenuComponent} from './layouts/college-layout/nav-menu/nav-menu.component';
import { LoginComponent } from './account/login/login.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { MatButtonModule,MatRippleModule,MatFormFieldModule,MatInputModule , MatMenuModule, MatSnackBarModule,  MatProgressSpinnerModule } from '@angular/material';
import { AuthGuard } from './service/auth-guard.service';
import { LoginAuthGuard } from './service/login-auth-guard';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz17uV4GBRwRhEq7fodPHy5WR5-Ho0hmg'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CollegeLayoutComponent,
    LoginComponent,
    ForgotPasswordComponent,NavMenuComponent
    
    
  ],
  //providers: [LoginAuthGuard,AuthGuard,],
  providers: [LoaderService,LoginAuthGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
