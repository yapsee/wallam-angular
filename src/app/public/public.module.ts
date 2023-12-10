import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ComponentsModule } from '../shared/components/components.module';
import { CampaignsPublicComponent } from './campaigns-public/campaigns-public.component';
import { ShowComponent } from './show/show.component';
import { DonateComponent } from './donate/donate.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { CancelPaymentComponent } from './cancel-payment/cancel-payment.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    CampaignsPublicComponent,
    ShowComponent,
    DonateComponent,
    SuccessPaymentComponent,
    CancelPaymentComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ComponentsModule],
})
export class PublicModule { }
