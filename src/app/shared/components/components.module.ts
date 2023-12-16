import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';

import { FormsModule } from '@angular/forms';
import { CampaignsStatusComponent } from './campaigns-status/campaigns-status.component';



@NgModule({
  declarations: [AuthcomponentComponent, CampaignsListComponent,CampaignsListComponent, FooterComponent, NavbarComponent, NotificationComponent, CampaignsStatusComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [AuthcomponentComponent, CampaignsListComponent, FooterComponent, NavbarComponent, NotificationComponent, CampaignsStatusComponent],
})
export class ComponentsModule { }
