import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { IsConnectedGuard } from './core/is-connected.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path :'', component : HomePageComponent},
  {path :'login', component : LoginComponent},
  {path :'dashboard', component : DashboardPageComponent, canActivate: [IsConnectedGuard]},
  {path :'admin', component : DashboardPageComponent, canActivate: [IsAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
