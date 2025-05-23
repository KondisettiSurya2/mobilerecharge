import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileValidationComponent } from './mobile-validation/mobile-validation.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '', component: MobileValidationComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
