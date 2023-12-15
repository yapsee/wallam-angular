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
import { CreateCampaignComponent } from './secure/create-campaign/create-campaign.component';
import { SecureComponent } from './secure/secure.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ExplainComponent } from './public/explain/explain.component';
import { AdminComponent } from './admin/admin.component';
import { ManagementComponent } from './admin/management/management.component';
import { AdminGuard } from './shared/guards/admin.guard';

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
      { path: 'success', component: SuccessPaymentComponent },
      { path: 'how_it_works', component: ExplainComponent },

    ],
  },
  {
    path: '',
    component: SecureComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'launch', component: CreateCampaignComponent },
    ],
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [

      { path: 'admin', component:  ManagementComponent},
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
