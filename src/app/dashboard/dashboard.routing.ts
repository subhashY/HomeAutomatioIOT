import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { LivereportComponent } from './livereport/livereport.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full',
   
  },
  //  { path: '**', redirectTo: 'register' }, 
  { path: 'dashboard', component: DashboardComponent},
  { path: 'report', component: LivereportComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'settings', component: SettingsComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });