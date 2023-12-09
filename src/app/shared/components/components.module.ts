import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';



@NgModule({
  declarations: [AuthcomponentComponent, CampaignsListComponent,CampaignsListComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthcomponentComponent, CampaignsListComponent],
})
export class ComponentsModule { }
