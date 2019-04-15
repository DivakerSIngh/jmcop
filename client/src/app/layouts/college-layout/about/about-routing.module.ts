import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VissionComponent } from './vission/vission.component';
import { ChairmanMessageComponent } from './chairman-message/chairman-message.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { FounderMessageComponent } from './founder-message/founder-message.component';
import { AffiliationComponent } from './affiliation/affiliation.component';

 const routes: Routes = [
  { path: 'vision',   component: VissionComponent },
  { path: 'chairmanmessage',   component: ChairmanMessageComponent },
  { path: 'directormessage',   component: DirectorMessageComponent },
  { path: 'foundermessage',   component: FounderMessageComponent },
  { path: 'affiliation',   component: AffiliationComponent },
  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
