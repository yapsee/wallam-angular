import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './management/management.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { UsersComponent } from './users/users.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WithdrawsComponent } from './withdraws/withdraws.component';



@NgModule({
  declarations: [
    AdminComponent,
    ManagementComponent,
    MenuComponent,
    NavComponent,
    UsersComponent,
    CampaignsComponent,
    TransactionsComponent,
    WithdrawsComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ComponentsModule, PipesModule],
})
export class AdminModule { }
