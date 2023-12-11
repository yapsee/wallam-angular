import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [AuthcomponentComponent, CampaignsListComponent,CampaignsListComponent, FooterComponent, NavbarComponent, NotificationComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AuthcomponentComponent, CampaignsListComponent, FooterComponent, NavbarComponent, NotificationComponent],
})
export class ComponentsModule { }
