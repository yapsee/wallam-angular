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



@NgModule({
  declarations: [
    AdminComponent,
    ManagementComponent,
    MenuComponent,
    NavComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ComponentsModule, PipesModule],
})
export class AdminModule { }
