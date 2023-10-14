import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './core/guard/auth.guard';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
    canActivate: [authGuard],
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [authGuard],
  },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
