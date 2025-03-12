import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, title: 'Login' }, 
  { path: 'register', component: RegisterComponent, title: 'Register' }, 
  {
    path: 'dashboard',
    component: MainLayoutComponent, 
    children: [
      { path: '', component: DashboardComponent }, 
    ]
  },
  { path: '**', component:NotFoundComponent } 
];