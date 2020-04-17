import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { routing } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LivereportComponent } from './livereport/livereport.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    RoomsComponent,
    SettingsComponent,
    LivereportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing
    // AppRoutingModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
