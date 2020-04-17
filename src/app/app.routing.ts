import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full',
   
  },
  
  //  { path: '**', redirectTo: 'register' }, 
  { path: 'dashboard', component: DashboardComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });