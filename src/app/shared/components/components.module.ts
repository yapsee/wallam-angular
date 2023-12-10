import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthcomponentComponent, CampaignsListComponent,CampaignsListComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AuthcomponentComponent, CampaignsListComponent],
})
export class ComponentsModule { }
