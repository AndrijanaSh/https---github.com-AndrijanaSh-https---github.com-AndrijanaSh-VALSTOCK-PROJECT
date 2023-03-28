import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './authenticated.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {title: 'Login', path: 'login', component: LoginComponent, canActivate: [AuthenticatedGuard]},
  {title: 'Dashboard', path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticatedGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
