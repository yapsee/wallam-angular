import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { CampaignsPublicComponent } from './public/campaigns-public/campaigns-public.component';
import { ShowComponent } from './public/show/show.component';
import { DonateComponent } from './public/donate/donate.component';
import { CancelPaymentComponent } from './public/cancel-payment/cancel-payment.component';
import { SuccessPaymentComponent } from './public/success-payment/success-payment.component';

const routes: Routes = [
  {

  
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: CampaignsPublicComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'campaigns/:id', component: ShowComponent },
      { path: 'transactions/donate/:id', component: DonateComponent },
      { path: 'cancel', component: CancelPaymentComponent },
      { path: 'success', component: SuccessPaymentComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
