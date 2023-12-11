import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureComponent } from './secure.component';



@NgModule({
  declarations: [SecureComponent ,CreateCampaignComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ComponentsModule],
})
export class SecureModule { }
