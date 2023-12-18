import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './modals/notification/notification.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignsStatusComponent } from './modals/campaigns-status/campaigns-status.component';
import { UserShowComponent } from './modals/user-show/user-show.component';
import { PayComponent } from './modals/pay/pay.component';
import { RetraitComponent } from './modals/retrait/retrait.component';



@NgModule({
  declarations: [AuthcomponentComponent, CampaignsListComponent,CampaignsListComponent, FooterComponent,
                NavbarComponent, NotificationComponent, CampaignsStatusComponent,
                UserShowComponent, PayComponent, RetraitComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule
  ],
  exports: [AuthcomponentComponent, CampaignsListComponent, FooterComponent, NavbarComponent, NotificationComponent,
            CampaignsStatusComponent, UserShowComponent, PayComponent, RetraitComponent],
})
export class ComponentsModule { }
