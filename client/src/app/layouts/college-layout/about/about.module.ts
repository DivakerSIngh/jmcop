import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';
import { VissionComponent } from './vission/vission.component';
import { ChairmanMessageComponent } from './chairman-message/chairman-message.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { FounderMessageComponent } from './founder-message/founder-message.component';
import { AffiliationComponent } from './affiliation/affiliation.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [VissionComponent, ChairmanMessageComponent, DirectorMessageComponent, FounderMessageComponent, AffiliationComponent]
})
export class AboutModule { }
