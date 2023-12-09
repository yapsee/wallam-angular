import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';



@NgModule({
  declarations: [AuthcomponentComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthcomponentComponent],
})
export class ComponentsModule { }
