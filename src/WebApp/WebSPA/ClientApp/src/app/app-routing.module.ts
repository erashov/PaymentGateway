import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
const routes: Routes = [   { path: '',component: MaterialDashboardComponent },
{ path: 'register', component: RegistrationComponentComponent },
{ path: 'login', component: LoginComponentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
